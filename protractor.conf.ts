import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "./e2e/support/reporter.e2e";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  allScriptsTimeout: 11000,
  specs: [
    "../../features/*.feature",
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',

  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    Reporter.createDirectory(jsonReports);
  },

  cucumberOpts: {
    compiler: "ts:ts-node/register",
    format: "json:./reports/json/cucumber_report.json",
    require: ["../../e2e/steps/**/*.ts", "../../e2e/support/**/*.ts"],
    strict: true,
    tags: "@SimpleBindingScenario",
  },

  onComplete: () => {
    Reporter.createHTMLReport();
  },
};
