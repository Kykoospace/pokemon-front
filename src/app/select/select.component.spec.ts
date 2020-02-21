import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {GridComponent} from './grid/grid.component';
import {PokemonComponent} from './grid/pokemon/pokemon.component';
import {RouterTestingModule} from '@angular/router/testing';
import {PokemonService} from '../shared/pokemon.service';
import {SearchComponent} from './grid/search/search.component';
import {FormsModule} from '@angular/forms';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule ],
      declarations: [ SelectComponent, GridComponent, PokemonComponent, SearchComponent ],
      providers: [PokemonService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
