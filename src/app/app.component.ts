import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exampleApp';
  input: string;
  inputValue: string;

  changeValue(): void {
    this.inputValue = this.input;
  }
}
