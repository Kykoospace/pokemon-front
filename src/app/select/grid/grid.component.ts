import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() private pokemonList: any;
  @Input() private selectedPokemon: number;
  @Output() private pokemonSelected = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  private selectPokemon(id: number) {
    this.pokemonSelected.emit(id);
  }
}
