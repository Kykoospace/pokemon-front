import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../shared/pokemon.service';
import {Pokemon} from '../shared/models/pokemon';
import {PokemonFromApi} from '../shared/models/apiModels';
import pokemonGif from 'pokemon-gif';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  private pokemonList: Pokemon[] = new Array<Pokemon>();
  private pokemon1: Pokemon;
  private pokemon2: Pokemon;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemonList()
      .subscribe((list: PokemonFromApi[]) => {
        for (const pok of list) {
          this.pokemonService.getPokemonByUrl(pok.url)
            .subscribe((pokemon) => {
              this.pokemonList[pokemon.id - 1] = pokemon;
            },
              err => console.error(err));
        }
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

  pokemonGif(id: number) {
    return pokemonGif(id);
  }
}
