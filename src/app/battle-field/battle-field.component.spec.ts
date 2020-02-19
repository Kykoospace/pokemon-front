import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleFieldComponent } from './battle-field.component';
import {PokemonPanelComponent} from './pokemon-panel/pokemon-panel.component';
import {MessagePanelComponent} from './message-panel/message-panel.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {Observable, of} from 'rxjs';

describe('BattleFieldComponent', () => {
  let component: BattleFieldComponent;
  let fixture: ComponentFixture<BattleFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: {paramMap: convertToParamMap({id: '1'})}
          }
        },
      ],
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
