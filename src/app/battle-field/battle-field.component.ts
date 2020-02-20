import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonService} from '../shared/pokemon.service';
import {Battle, Message} from '../shared/logic/battle';
import {Pokemon} from '../shared/models/pokemon';

@Component({
  selector: 'app-battle-field',
  templateUrl: './battle-field.component.html',
  styleUrls: ['./battle-field.component.scss']
})
export class BattleFieldComponent implements OnInit, AfterViewInit {

  private pokemon1: Pokemon;
  private pokemon2: Pokemon;

  private battle: Battle;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.initPokemon();
  }

  private initPokemon() {
    this.pokemonService.getPokemonById(
      parseInt(this.route.snapshot.paramMap.get('pokemonId1'), 10)
    ).subscribe((pokemon1) => {
      this.pokemon1 = pokemon1;
      this.pokemonService.getPokemonById(
        parseInt(this.route.snapshot.paramMap.get('pokemonId2'), 10)
      ).subscribe((pokemon2) => {
        this.pokemon2 = pokemon2;
        this.battle = new Battle(this.pokemon1, this.pokemon2);
        console.log(this.pokemon1);
        this.battle.runFight();
      });
    });
  }

  ngAfterViewInit(): void {
  }
}
