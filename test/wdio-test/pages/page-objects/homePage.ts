// import { by, Target,Text, isVisible } from '@serenity-js/webdriverio';
// import { Ensure, includes } from '@serenity-js/assertions';
// import { Task } from '@serenity-js/core';

// export const sign_in_button= Target.the('Sign In Button on Home Page').located(by.xpath('//a[contains(text(),"Sign in")]')) ;

// export class Verify{
//       static isSignInButtonVisible = () =>
//         Task.where(`#actor verifies that text is present`,
//             Ensure.that(sign_in_button, isVisible()),
//         );

//         static called = (name: string): Question<Promise<Element<'async'>>> =>
//         Examples.all()
//             .where(Text, equals(name))
//             .first()  
// }

import { by, Target } from '@serenity-js/webdriverio';

/**
 * This is called a "Lean Page Object".
 * Lean Page Objects describe interactive elements of a widget.
 * In this case, The list of examples at https://the-internet.herokuapp.com/
 */
export class HomePage {
    static signInTab = () => Target.all('Sing In Tab').located(by.xpath('//a[contains(text(),"Sign in")]'))
    static contactUSTab = () => Target.all('Contact US Tab').located(by.id('contact-link'));

    /**
     * Note how I pick an element which text matches `name` without having to use XPath
     * See: https://janmolak.com/xpath-is-dead-anpm dvanced-web-element-locators-with-serenity-js-2-25-0-66145ad248d4
     *
     * @param name
     */
    // static called = (name: string): Question<Promise<Element<'async'>>> =>
    //     HomePage.all()
    //         .where(Text, equals(name))
    //         .first()
}
         