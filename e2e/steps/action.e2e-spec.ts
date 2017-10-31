import { browser, protractor } from "protractor";
import { HomePage } from "../po/home.po";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const home: HomePage = new HomePage();

When(/^I type "(.*?)"$/, async (text) => {
  await home.input.sendKeys(text);
});

Then(/^I click on show button$/, async () => {
  await home.button.click();
});

Then(/^I should see the message simple on label$/, async () => {
  await expect(home.label.getText()).to.eventually.equal("simple");
});

Then(/^I clear the input field$/, async () => {
  await home.input.clear();
});

Then(/^I should see empty input$/, async () => {
  await expect(home.input.getText()).to.eventually.have.lengthOf(0);
});
