import 'expect-webdriverio';

import { Given, Then } from '@cucumber/cucumber';
import { Actor } from '@serenity-js/core';
import { Navigate } from '@serenity-js/webdriverio';

import { BBCAction } from '../../test/authentication';
//import { PickExample } from '../../test/examples';

Given('{actor} visit {string}', async function (actor:Actor,URL:string) {
    //URL="https://www.bbc.co.uk/"
    actor.attemptsTo(
        Navigate.to('/'))
});

Then('{pronoun} entered {string} at {string}', async function (actor:Actor,expectedValue:string, selector:string) {
    //browser.$(this.getLocators[selector]).setValue(expectedValue);
    actor.attemptsTo(
        BBCAction.click_weathar()
    )
});
Then('{pronoun} click on {string}',async function (actor:Actor,selector:string) {
    //browser.$(this.getLocators[selector]).click();
    //console.log("This is locator--->>>", this.getLocators[selector]);
    // browser.$(locators[selector]).click();
    actor.attemptsTo(
        BBCAction.click_weathar()
    )
});

// Then("I shloud see Page title {string}", async function (expectedValue) {
//   this.assert.equal(browser.getTitle(), expectedValue);
//   const screenshot = await browser.takeScreenshot();
//             // No access to World instance so the code below won't work
//             this.attach(screenshot, "image/png");

// });

Then('{pronoun} shloud see Page title {string}', async function (actor:Actor,expectedValue:string) {
    //this.assert.equal(browser.getTitle(), expectedValue);
    actor.attemptsTo(

    )
});

Then(
    '{pronoun} expect to see placeholder text {string} at {string}',
    async function (actor:Actor,expectedValue:string, selector:string) {
    // this.assert.equal(
    //   browser.$(this.getLocators[selector]).getText(),
    //   expectedValue
    // );
    }
);

Then('{pronoun} expect to see URL containing {string}', async function (actor:Actor,expectedValue:string) {
    //this.expect(browser).toHaveUrlContaining(expectedValue);
    //expect(browser).toHaveUrlContaining(expectedValue);
});

Then('{pronoun} clicked on day {string} to check weather', async function (actor:Actor,day:string) {
    //let dayloc = locators["daylink"] + day;
    //browser.$(this.getLocators["daylink"] + day).click;
});
