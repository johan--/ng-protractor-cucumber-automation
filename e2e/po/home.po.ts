import { browser, element, by, $ } from 'protractor';

export class HomePage {

  public input: any;
  public label: any;
  public button: any;

  constructor() {
    this.label = $("#label-prueba");
    this.input = $("#input-prueba");
    this.button = $("#button-prueba");
  }

  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('h1')).getText();
  }

}
