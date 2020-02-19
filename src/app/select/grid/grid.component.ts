import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PokemonFromApi} from '../../shared/models/apiModels';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() private pokemonList: PokemonFromApi[];
  @Input() private selectedPokemon: number;
  @Output() private pokemonSelected = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  private selectPokemon(id: number) {
    this.pokemonSelected.emit(id);
  }
}
