import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../shared/pokemon.service';
import {Pokemon} from '../shared/models/pokemon';
import {PokemonFromApi} from '../shared/models/apiModels';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  private pokemonList: PokemonFromApi[];
  private pokemon1: Pokemon;
  private pokemon2: Pokemon;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemonList()
      .subscribe((list: PokemonFromApi[]) => {
        this.pokemonList = list;
      });
  }

  private changePokemon1(id: number) {
    this.pokemonService.getPokemonById(id)
      .subscribe((pokemon: Pokemon) => {
        this.pokemon1 = pokemon;
      });
  }

  private changePokemon2(id: number) {
    this.pokemonService.getPokemonById(id)
      .subscribe((pokemon: Pokemon) => {
        this.pokemon2 = pokemon;
      });
  }

}
