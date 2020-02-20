import {Pokemon} from '../models/pokemon';

class Message {
  pokemon: Pokemon;
  message: string;
}

export class Battle {

  private messages: Message[] = [];

  constructor(
    private pok1: Pokemon,
    private pok2: Pokemon
  ) {}

  public attack() {
    // const fighter: Pokemon = this.whoShouldAttackFirst();
    // const target: Pokemon = fighter === this.pok1 ? this.pok2 : this.pok1;
    // const damage = Math.floor(
    //   Math.floor(
    //     Math.floor(
    //       2 * fighter.level / 5 + 2
    //     )
    //     * fighter.offensiveStat * fighter.basePower / target.basePower
    //   ) / 50
    // ) + 2;
    //
    // // Set damage to defender.
    // target.defensiveStat = damage;
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
