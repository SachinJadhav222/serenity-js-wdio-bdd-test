# SerenityJS Cucumber WebdriverIO Test Automation 


to get started with acceptance testing your web applications using [Serenity/JS](https://serenity-js.org),
[Cucumber](https://github.com/cucumber/cucumber-js) and [WebdriverIO](https://webdriver.io/).

Information:
- [Serenity BDD reports for this project](https://serenity-js.github.io/serenity-js-cucumber-webdriverio-template/)
- [Serenity/JS Website](https://serenity-js.org)
- [Serenity/JS Tutorial](https://serenity-js.org/handbook/thinking-in-serenity-js/index.html)
- [Serenity/JS API Docs](https://serenity-js.org/modules)

## Prerequisites

To use this project, you'll need:
- Node.js, a Long-Term Support (LTS) release version 12 or later - [download](https://nodejs.org/en/)
- Java Runtime Environment (JRE) or a Java Development Kit (JDK) version 8 or later - [download](https://adoptopenjdk.net/)
- Chrome web browser - [download](https://www.google.co.uk/chrome/)


## Usage

This repository is in GitHub. You can  [clone it to your computer](https://github.com/SachinJadhav222/serenity-js-wdio-bdd-test).

### Installation

Once you have the code on your computer, use your computer terminal to run the following command in the directory where you've cloned the project:
```
npm ci
```

Running [`npm ci`](https://docs.npmjs.com/cli/v6/commands/npm-ci) downloads the [Node modules](https://docs.npmjs.com/about-packages-and-modules) this project depends on, as well as the latest version of [`chromedriver`](https://www.npmjs.com/package/chromedriver) and the [Serenity BDD CLI](https://github.com/serenity-bdd/serenity-cli) reporter jar. 


### Execution

The project provides several [NPM scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts) defined in [`package.json`](package.json):

```
npm run lint            # runs code linter
npm run lint:fix        # attempts to automatically fix linting issues
npm run clean           # removes reports from any previous test run
npm test                # executes the example test suite
                        # and generates the report under ./target/site/serenity
```

## Reports folder
```
target/site/serenity
```



