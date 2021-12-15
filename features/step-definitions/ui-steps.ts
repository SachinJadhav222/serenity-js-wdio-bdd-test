// import "expect-webdriverio";

// import { Given, Then, When } from "@cucumber/cucumber";
// import { Actor, actorInTheSpotlight, Log } from "@serenity-js/core";
// import { Navigate, Website } from "@serenity-js/webdriverio";

// import { Authenticate, VerifyAuthentication } from "../../test/authentication";
// import { PickExample } from "../../test/examples";
// import { Ensure, startsWith } from "@serenity-js/assertions";

// import {
//   HomePageTask,
//   LoginPageTask,
//   AccountPageTask,
// } from "../../test/web/page-task";

// // import{
// //     webHomePage02,
// //     loginPage02,
// //     myAccoutnPage02

// //     } from '../../pages'

// Given("{actor} am on the home page", async (actor:Actor) => {
//     actor.attemptsTo(
//         Navigate.to("/")
//     )
// });

// When("{actor} login with {string} and {string}",async (actor:Actor,username, password) => {
//   actor.attemptsTo(
//   HomePageTask.clickSingInButton(),
//     LoginPageTask.enterUsername(username),
//     LoginPageTask.enterPassword(password),
//     LoginPageTask.clickSingInButton()
//   )
// });

// Then("{actor} should see message saying {string}", async(actor:Actor,message) => {
//   actor.attemptsTo(
//   AccountPageTask.verifyPageHeading()
//   )
// });
