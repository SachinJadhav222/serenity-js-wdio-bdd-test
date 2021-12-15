import { by, Target } from '@serenity-js/webdriverio';

export const accountPageTarget = {
    pageHeading: ()=> Target.the('Page Heading').located(by.css('.page-heading')),
    
}
