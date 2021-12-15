import 'expect-webdriverio';

import { Given, Then } from '@cucumber/cucumber';
import { Actor, Log } from '@serenity-js/core';
import { Navigate, Website } from '@serenity-js/webdriverio';

Given('{actor} login to web store', async (actor: Actor) => {
    actor.attemptsTo(Navigate.to('/'));
    Log.the(Website.title())
    console.log('This is title======>',Log.the(Website.title()))
});

Then(
    '{pronoun} shloud see page title {string}',
    async (actor: Actor, title: string) => {
      
        actor.attemptsTo(
            //Verify.isSignInButtonVisible()
        );
    }
);

Then(
    '{pronoun} clicked on {string}',
    async (actor: Actor, button_to_click: string) => {
        actor.attemptsTo(
            //  HomePage.signInTab()
        );
    }
);

Then(
    '{pronoun} enter {string} at {string}',
    async (actor: Actor, expectedValue: string, selector: string) => {
        actor.attemptsTo();
    }
);

Then(
    '{pronoun} shloud see {string} at {string}',
    async (actor: Actor, expectedValue: string, selector: string) => {
        actor.attemptsTo();
    }
);
