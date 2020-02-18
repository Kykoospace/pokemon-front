import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public static API_URL = 'https://pokeapi.co/api/v2/';

  constructor(
    private http: HttpClient
  ) { }

  public getPokemonList(): Observable<any> {
    return this.http.get<any>(PokemonService.API_URL + 'pokemon?limit=20');
  }

  public getPokemonByUrl(pokemonUrl: string): Observable<any> {
    return this.http.get<any>(pokemonUrl);
  }

  public getPokemonById(pokemonId: number): Observable<any> {
    return this.http.get<any>(PokemonService.API_URL + 'pokemon/' + pokemonId);
  }
}
