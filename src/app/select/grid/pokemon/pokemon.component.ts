import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PokemonService} from '../../../shared/pokemon.service';
import {Pokemon} from '../../../shared/models/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() private pokemonUrl: string;
  @Input() private selectedPokemon: number;
  private pokemon: Pokemon;

  @Output() pokemonSelected = new EventEmitter<number>();

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemonByUrl(this.pokemonUrl)
      .subscribe((pokemon: Pokemon) => {
        this.pokemon = pokemon;
      });
  }

  private selectPokemon() {
    this.pokemonSelected.emit(this.pokemon.id);
  }
}
