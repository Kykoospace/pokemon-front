import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../shared/pokemon.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  private pokemonList: any;
  private pokemon1: any;
  private pokemon2: any;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemonList()
      .subscribe((list) => {
        this.pokemonList = list.results;
      });
  }

  private changePokemon1(id: number) {
    this.pokemonService.getPokemonById(id)
      .subscribe((pokemon) => {
        this.pokemon1 = pokemon;
      });
  }

  private changePokemon2(id: number) {
    this.pokemonService.getPokemonById(id)
      .subscribe((pokemon) => {
        this.pokemon2 = pokemon;
      });
  }

}
