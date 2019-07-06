import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <h1>Hello World {{title}}</h1>
  `,
  styleUrls: []
})
export class HelloWorldComponent {
  title = 'Angular';
}
