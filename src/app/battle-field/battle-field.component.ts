import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PokemonService} from '../shared/pokemon.service';
import {Battle} from '../shared/logic/battle';
import {Pokemon} from '../shared/models/pokemon';
import {forkJoin, Observable} from 'rxjs';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-battle-field',
  templateUrl: './battle-field.component.html',
  styleUrls: ['./battle-field.component.scss']
})
export class BattleFieldComponent implements OnInit {

  private pokemon1: Pokemon;
  private pokemon2: Pokemon;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private battle: Battle,
    private route: Router
) { }

  ngOnInit() {
    this.battle.messages = [];
    this.initPokemon();
    console.log(this.pokemon1);
  }

  private initPokemon(): void {

    let pok1Observable: Observable<Pokemon>;
    let pok2Observable: Observable<Pokemon>;

    this.activatedRoute.params.pipe(mergeMap((params: Params) => {
        pok1Observable = this.pokemonService.getPokemonById(params.pokemonId1);
        pok2Observable = this.pokemonService.getPokemonById(params.pokemonId2);
        return forkJoin([pok1Observable, pok2Observable]);
      }
    )).subscribe(
      result => {
        this.pokemon1 = result[0];
        this.pokemon2 = result[1];
      },
      error => console.log(`Error while trying to retrieve pokemon from pokemon service ${error}`),
    );
  }

  public startBattle(): void {
    this.battle.battleRun = true;
    this.battle.runFight(this.pokemon1, this.pokemon2);
  }

  public stopBattle(): void {
    this.battle.battleRun = false;
  }

  private backToSelect() {
    this.route.navigate(['select']);
  }
}
