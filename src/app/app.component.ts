import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
  template: `<router-outlet></router-outlet>`,
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'quanproApp';
}
