import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonService} from '../shared/pokemon.service';

@Component({
  selector: 'app-battle-field',
  templateUrl: './battle-field.component.html',
  styleUrls: ['./battle-field.component.scss']
})
export class BattleFieldComponent implements OnInit {

  private pokemon1: any;
  private pokemon2: any;
  private messages: string[] = [
    'Banane steak',
    'Truc de test',
    'Tavu bang bang'
  ];

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemonById(
      parseInt(this.route.snapshot.paramMap.get('pokemonId1'), 10)
    ).subscribe((pokemon) => {
      this.pokemon1 = pokemon;
    });
    this.pokemonService.getPokemonById(
      parseInt(this.route.snapshot.paramMap.get('pokemonId2'), 10)
    ).subscribe((pokemon) => {
      this.pokemon2 = pokemon;
    });
  }

  private ajoutMessage() {
    this.messages.push('Banane');
  }

}
