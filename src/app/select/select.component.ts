import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../shared/pokemon.service';
import {Pokemon} from '../shared/models/pokemon';
import {PokemonFromApi} from '../shared/models/apiModels';
import pokemonGif from 'pokemon-gif';
import {forkJoin, Observable} from 'rxjs';
import {entryPointKeyFor} from '@angular/compiler-cli/src/ngtsc/routing';
import {mergeMap} from 'rxjs/operators';
import {Router} from '@angular/router';

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
    private pokemonService: PokemonService,
    private route: Router
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemonList()
      .pipe(
        mergeMap(
          (list: PokemonFromApi[]) => {
            const results = new Array<Observable<Pokemon>>();
            for (const res of list) {
              results.push(this.pokemonService.getPokemonByUrl(res.url));
            }
            return forkJoin(results);
          })
      )
      .subscribe(results => {
        for (const pok of results) {
          this.pokemonList[pok.id - 1] = pok;
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

  private pokemonGif(id: number) {
    return pokemonGif(id);
  }

  private startFight() {
    this.route.navigate(['fight', this.pokemon1.id, this.pokemon2.id]);
  }
}
