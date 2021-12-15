import { by, Target } from '@serenity-js/webdriverio';

export const HomePage = {
    title: () => Target.the('article title').located(by.css('h2')),
    
    //page_title: () => Target.the('article title').located(by.)),
        
    // weather_tab: ()=>Target.the('Weather Tab').located(by.xpath('//a[contains(text(),"Weather")]')) ,

    weather_tab: ()=>Target.the('Weather Tab').located(by.xpath('(//a[contains(text(),"Weather")])[1]')) ,

    //(//a[contains(text(),"Weather")])[1]
}

//export const webTab=Target.the('Weather Tab').located(by.xpath('(//a[contains(text(),"Weather")])[1]'))