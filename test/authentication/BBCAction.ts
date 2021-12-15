import { Task } from '@serenity-js/core';
import { Click, Enter } from '@serenity-js/webdriverio';

import {HomePage} from './ui/BBCHome'
import { LoginForm } from './ui/LoginForm';

/**
 * This is called a "Task".
 * Use tasks to compose a sequence of one or more activities and give them domain meaning.
 *
 * Here, the actor performs three activities:
 * - enter username
 * - enter password
 * - click on the login button
 *
 * This sequence of activities together means to "log in"
 */
export const BBCAction = {
    using: (username: string, password: string) =>
        Task.where(`#actor logs in as ${ username }`,
            Enter.theValue(username).into(LoginForm.usernameField()),
            Enter.theValue(password).into(LoginForm.passwordField()),
            Click.on(LoginForm.loginButton()),
        ),
    
    click_weathar: ()=>
        Task.where(`#actor clicked on BBC weather Tab`,
            Click.on(HomePage.weather_tab()),
        ),
}
