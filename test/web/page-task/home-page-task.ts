import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/webdriverio';

import { homePageTarget } from '../page-target/home-page-target';

export class HomePageTask {
    static clickSingInButton = () =>
        Task.where(
            `User click the sign in button`,
            Click.on(homePageTarget.signInButton())
        );
}
