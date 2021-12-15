import { Ensure } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { by, isVisible,Target } from '@serenity-js/webdriverio';

export const sign_in_button= Target.the('Sign In Button on Home Page').located(by.xpath('//a[contains(text(),"Sign in")]')) ;

export class Verify{
    public  static isSignInButtonVisible = () =>
        Task.where(`#actor verifies that text is present`,
            Ensure.that(sign_in_button, isVisible()),
        )
 
}
         