import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectComponent } from './select/select.component';
import { BattleFieldComponent } from './battle-field/battle-field.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/select' },
  { path: 'select', component: SelectComponent },
  { path: 'fight/:pokemonId1/:pokemonId2', component: BattleFieldComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
