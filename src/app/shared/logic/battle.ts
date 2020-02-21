import {Pokemon} from '../models/pokemon';
import {delay, last, map, take, takeUntil, takeWhile, timeout} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {root} from 'rxjs/internal-compatibility';
import {interval, Observable} from 'rxjs';

export class Message {

  constructor(
    public pokemon: Pokemon,
    public message: string,
  ) {}
}



@Injectable({
  providedIn: 'root'
})
export class Battle {

  public messages: Message[];
  public battleRun = false;

  constructor(
  ) {}

  public runFight(pokemon1: Pokemon, pokemon2: Pokemon) {
    let fighter: Pokemon = this.whoShouldAttackFirst(pokemon1, pokemon2);
    let target: Pokemon = fighter === pokemon1 ? pokemon2 : pokemon1;
    pokemon1.life = this.getStatFromPokemon(pokemon1, 'hp');
    pokemon2.life = this.getStatFromPokemon(pokemon2, 'hp');
    let tmp: Pokemon;

    interval(1000)
      .pipe(
        takeWhile(() => this.isAlive(target) && this.isAlive(fighter) && this.battleRun)
      )
      .subscribe(
        () => {
          tmp = fighter;
          fighter = target;
          target = tmp;
          this.attack(fighter, target);
        },
        err => console.log('Error on battle'),
        () => {
          const winner = (this.isAlive(pokemon1)) ? pokemon1 : pokemon2;
          this.messages.push(new Message(winner, `${winner.name} won the battle`));
        });
  }

  public attack(fighter: Pokemon, target: Pokemon) {
    const damage = Math.floor(
      Math.floor(
        Math.floor(
          (2 / 5) + 2
        )
        * this.getStatFromPokemon(fighter, 'attack')
        * this.getStatFromPokemon(fighter, 'attack')
        / this.getStatFromPokemon(target, 'defense')
      ) / 50
    ) + 2;

    // Logs.
    this.messages.push(new Message(fighter, `${fighter.name} attacked ${target.name}.`));
    this.messages.push(new Message(target, `${target.name} has taken ${damage} damages.`));

    // Set damage to defender.
    target.life -= damage;
  }

  public whoShouldAttackFirst(pokemon1: Pokemon, pokemon2: Pokemon): Pokemon {
    const speedPok1 = this.getStatFromPokemon(pokemon1, 'speed');
    const speedPok2 = this.getStatFromPokemon(pokemon2, 'speed');
    return (speedPok1 >= speedPok2)
      ? pokemon1
      : pokemon2;
  }

  public isAlive(pokemon: Pokemon) {
    return pokemon.life > 0;
  }

  private getStatFromPokemon(pokemon: Pokemon, statName: string): number {
    for (const stat of pokemon.stats) {
      if (stat.stat.name === statName) {
        return stat.base_stat;
      }
    }
  }
}
