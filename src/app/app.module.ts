import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleFieldComponent } from './battle-field/battle-field.component';
import { MessagePanelComponent } from './battle-field/message-panel/message-panel.component';
import { PokemonPanelComponent } from './battle-field/pokemon-panel/pokemon-panel.component';
import { SelectComponent } from './select/select.component';
import { GridComponent } from './select/grid/grid.component';
import { PokemonComponent } from './select/grid/pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { LanguageInterceptorService } from './shared/language-interceptor.service';
import { SearchComponent } from './select/grid/search/search.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BattleFieldComponent,
    MessagePanelComponent,
    PokemonPanelComponent,
    SelectComponent,
    GridComponent,
    PokemonComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LanguageInterceptorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
