import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/webdriverio';

import { loginPageTarget } from './ui/login-page-target';

export class LoginPageTask {
    static clickSingInButton = () =>
        Task.where(
            `User click the sign in button on Login form `,
            Click.on(loginPageTarget.submitButton())
        );

    static enterUsername = (username:string) =>
        Task.where(
            `username enter on Login form `,
            Click.on(loginPageTarget.usernameInput())
        ); 
    
    static enterPassword = (password:string) =>
        Task.where(
            `Password enter on Login form `,
            Click.on(loginPageTarget.passwordInput())
        ); 

}
