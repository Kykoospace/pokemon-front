import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div class="main-container"><router-outlet></router-outlet></div>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon-front';
}
