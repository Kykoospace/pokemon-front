import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pokemon} from '../../shared/models/pokemon';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() private pokemonList: Pokemon[];
  @Input() private selectedPokemon: number;
  @Output() private pokemonSelected = new EventEmitter<number>();

  private searchValue: string;
  private filteredList: Pokemon[] = [];

  constructor() { }

  ngOnInit() {
    this.filteredList = this.pokemonList;
    console.log(this.pokemonList);
  }

  private selectPokemon(id: number) {
    this.pokemonSelected.emit(id);
  }

  private updateSearch(searchValue: string) {
    this.searchValue = searchValue;
    this.filteredList = this.pokemonList.filter(pokemon => pokemon.name.toUpperCase().includes(this.searchValue.toUpperCase()));
  }
}
