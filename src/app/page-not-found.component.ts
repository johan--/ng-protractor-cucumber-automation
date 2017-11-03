import { Component } from '@angular/core';

@Component({
  selector: 'page-not-found',
  template: `
  <div class="col-xs-12 col-md-6 col-md-offset-3 text-center">
    <h2>{{title}}</h2>
  </div>
  `
})
export class PageNotFoundComponent {
  title = 'Ups ! page not found';
}
