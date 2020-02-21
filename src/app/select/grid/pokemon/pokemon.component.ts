import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PokemonService} from '../../../shared/pokemon.service';
import {Pokemon} from '../../../shared/models/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() private pokemon: Pokemon;
  @Input() private selectedPokemon: number;

  @Output() pokemonSelected = new EventEmitter<number>();

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() { }

  private selectPokemon() {
    this.pokemonSelected.emit(this.pokemon.id);
  }
}
