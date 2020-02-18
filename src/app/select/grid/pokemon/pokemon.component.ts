import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PokemonService} from '../../../shared/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() private pokemonUrl: string;
  @Input() private selectedPokemon: number;
  private pokemon: any;

  @Output() pokemonSelected = new EventEmitter<number>();

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemonByUrl(this.pokemonUrl)
      .subscribe((pokemon) => {
        this.pokemon = pokemon;
      });
  }

  private selectPokemon() {
    this.pokemonSelected.emit(this.pokemon.id);
  }
}
