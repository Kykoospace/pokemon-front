import {Component, Input, OnInit} from '@angular/core';
import pokemonGif from 'pokemon-gif';

@Component({
  selector: 'app-pokemon-panel',
  templateUrl: './pokemon-panel.component.html',
  styleUrls: ['./pokemon-panel.component.scss']
})
export class PokemonPanelComponent implements OnInit {

  @Input() private pokemon: any;
  @Input() private reverted: boolean;

  constructor() { }

  ngOnInit() { }

  pokemonGif(id: number) {
    return pokemonGif(id);
  }
}
