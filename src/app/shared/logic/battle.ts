import {Pokemon} from '../models/pokemon';
import {delay} from 'rxjs/operators';

export class Message {

  constructor(
    public pokemon: Pokemon,
    public message: string,
  ) {}
}

export class Battle {

  public messages: Message[] = [];

  constructor(
    private pok1: Pokemon,
    private pok2: Pokemon
  ) {}

  public runFight() {
    let fighter: Pokemon = this.whoShouldAttackFirst();
    let target: Pokemon = fighter === this.pok1 ? this.pok2 : this.pok1;
    this.pok1.life = this.getStatFromPokemon(this.pok1, 'hp');
    this.pok2.life = this.getStatFromPokemon(this.pok2, 'hp');
    let tmp: Pokemon;
    while (this.isAlive(this.pok1) && this.isAlive(this.pok2)){
      this.attack(fighter, target);
      tmp = fighter;
      fighter = target;
      target = tmp;
    }
    const winner = (this.isAlive(this.pok1))? this.pok1 : this.pok2;
    this.messages.push(new Message(winner, `${winner.name} won`));
  }

  private attack(fighter: Pokemon, target: Pokemon) {
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

    // Log.
    this.messages.push(new Message(fighter, `${fighter.name} attacked ${target.name}.`));
    this.messages.push(new Message(target, `${target.name} has taken ${damage} damages.`));

    // Set damage to defender.
    target.life -= damage;
  }

  public whoShouldAttackFirst(): Pokemon {
    const speedPok1 = this.getStatFromPokemon(this.pok1, 'speed');
    const speedPok2 = this.getStatFromPokemon(this.pok2, 'speed');
    return (speedPok1 >= speedPok2)
      ? this.pok1
      : this.pok2;
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
