import { by, Target } from '@serenity-js/webdriverio';

export const loginPageTarget = {
    
    usernameInput: ()=> Target.the('Username filed').located(by.id('#email')),

    passwordInput: ()=> Target.the('Password Filed').located(by.id('#passwd')),

    submitButton: ()=> Target.the('Submit Button').located(by.id('#SubmitLogin > span')),

}
