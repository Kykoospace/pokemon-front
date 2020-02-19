import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleFieldComponent } from './battle-field.component';
import {GridComponent} from '../select/grid/grid.component';
import {PokemonPanelComponent} from './pokemon-panel/pokemon-panel.component';
import {MessagePanelComponent} from './message-panel/message-panel.component';

describe('BattleFieldComponent', () => {
  let component: BattleFieldComponent;
  let fixture: ComponentFixture<BattleFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleFieldComponent, PokemonPanelComponent, MessagePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
