export interface PokemonFromApi {
  name: string;
  url: string;
}

export interface ObjectResult {
  count: number;
  previous: string;
  next: string;
  results: PokemonFromApi[];
}
