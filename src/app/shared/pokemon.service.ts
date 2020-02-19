import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {ObjectResult, PokemonFromApi} from './models/apiModels';
import {Pokemon} from './models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public static API_URL = 'https://pokeapi.co/api/v2/';

  constructor(
    private http: HttpClient
  ) { }

  public getPokemonList(): Observable<PokemonFromApi[]> {
    return this.http.get<ObjectResult>(PokemonService.API_URL + 'pokemon?limit=20').pipe(map(jsonResult => {
      return jsonResult.results;
    }));
  }

  public getPokemonByUrl(pokemonUrl: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(pokemonUrl);
  }

  public getPokemonById(pokemonId: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(PokemonService.API_URL + 'pokemon/' + pokemonId);
  }
}
