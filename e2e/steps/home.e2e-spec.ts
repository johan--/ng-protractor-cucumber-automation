import { HomePage } from "../po/home.po";
const { Given } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const home: HomePage = new HomePage();

Given(/^I am on simple binding page$/, async () => {
  home.navigateTo();
  await expect(home.getTitleText()).to.eventually.equal('Welcome to exampleApp!');
});
