import 'expect-webdriverio';

import { Given, Then, When } from '@cucumber/cucumber';
import { Ensure, startsWith } from '@serenity-js/assertions';
import { Actor, actorInTheSpotlight,Log, } from '@serenity-js/core';
import { Navigate, Website } from '@serenity-js/webdriverio';

import { Authenticate, VerifyAuthentication } from '../../test/authentication';
import {
    AccountPageTask,
    HomePageTask,
    LoginPageTask,
} from '../../test/authentication';
import { PickExample } from '../../test/examples';

/**
 * Below step definitions use Cucumber Expressions
 * see: https://cucumber.io/docs/cucumber/cucumber-expressions/
 *
 * {actor} and {pronoun} are custom expressions defined under support/parameters.ts
 */
Given('{actor} starts with the {string} example', async (actor: Actor, exampleName: string) =>
    actor.attemptsTo(
        Navigate.to('/'),
        PickExample.called(exampleName),
        Log.the(Website.title()),
        Ensure.that(Website.title(),startsWith('The')),
    )
);

When('{pronoun} log(s) in using {string} and {string}', async (actor: Actor, username: string, password: string) =>
    actor.attemptsTo(
        Authenticate.using(username, password),
    )
);

/**
 * If you need to use a RegExp instead of Cucumber Expressions like {actor} and {pronoun}
 * you can use actorCalled(name) and actorInTheSpotlight() instead
 *
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorCalled
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorInTheSpotlight
 */
Then(/.* should see that authentication has (succeeded|failed)/, async (expectedOutcome: string) =>
    actorInTheSpotlight().attemptsTo(
        VerifyAuthentication[expectedOutcome](),
    )
);

Given('{actor} is on the home page', async (actor:Actor) => {
    actor.attemptsTo(
        Navigate.to('http://automationpractice.com/index.php'),
        HomePageTask.clickSingInButton()
    )
});

When('{actor} login with {string} and {string}',async (actor:Actor,username, password) => {
    actor.attemptsTo(
  
        LoginPageTask.enterUsername(username),
        LoginPageTask.enterPassword(password),
        LoginPageTask.clickSingInButton()
    )
});

Then('{actor} should see message saying {string}', async(actor:Actor,message) => {
    actor.attemptsTo(
        AccountPageTask.verifyPageHeading()
    )
});

