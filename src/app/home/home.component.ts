import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {

  input: string;
  inputValue: string;

  constructor() {}

  changeValue(): void {
    this.inputValue = this.input;
  }

}
