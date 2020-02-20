import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonService} from '../shared/pokemon.service';
import {Battle, Message} from '../shared/logic/battle';
import {Pokemon} from '../shared/models/pokemon';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-battle-field',
  templateUrl: './battle-field.component.html',
  styleUrls: ['./battle-field.component.scss']
})
export class BattleFieldComponent implements OnInit {

  private pokemon1: Pokemon;
  private pokemon2: Pokemon;

  private battle: Battle;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.initPokemon();
    console.log(this.pokemon1);
  }

  private initPokemon(): void {
    const pok1Observable = this.pokemonService.getPokemonById( parseInt(this.route.snapshot.paramMap.get('pokemonId1'), 10));
    const pok2Observable = this.pokemonService.getPokemonById( parseInt(this.route.snapshot.paramMap.get('pokemonId2'), 10));

    forkJoin([pok1Observable, pok2Observable]).subscribe(
      result => {
        this.pokemon1 = result[0];
        this.pokemon2 = result[1];
        this.battle = new Battle(this.pokemon1, this.pokemon2);
      },
      error => console.log(`Error while trying to retrieve pokemon from pokemon service ${error}`),
      () => { this.battle.runFight(); }
      );
  }

}
