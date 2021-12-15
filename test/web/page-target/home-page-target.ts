import { by, Target } from '@serenity-js/webdriverio';

export const homePageTarget = {
    signInButton: ()=> Target.the('article title').located(by.xpath('//a[contains(text(),"Sign in")]')),
    
}
