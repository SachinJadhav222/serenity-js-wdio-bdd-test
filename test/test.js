"use strict";
exports.__esModule = true;
var core_1 = require("@serenity-js/core");
var rest_1 = require("@serenity-js/rest");
var assertions_1 = require("@serenity-js/assertions");
var actor = (0, core_1.actorCalled)('Apisit').whoCan(rest_1.CallAnApi.at('https://myapp.com/api'));
actor.attemptsTo(
// no users present in the system
rest_1.Send.a(rest_1.GetRequest.to('/users')), assertions_1.Ensure.that(rest_1.LastResponse.status(), (0, assertions_1.equals)(200)), assertions_1.Ensure.that(rest_1.LastResponse.body(), (0, assertions_1.equals)([])), 
// create a new test user account
rest_1.Send.a(rest_1.PostRequest.to('/users')["with"]({
    login: 'tester',
    password: 'P@ssword1'
}), assertions_1.Ensure.that(rest_1.LastResponse.status(), (0, assertions_1.equals)(201)), assertions_1.Ensure.that(rest_1.LastResponse.header('Location'), (0, assertions_1.startsWith)('/users')), 
// delete the test user account
rest_1.Send.a(rest_1.DeleteRequest.to(rest_1.LastResponse.header('Location'))), assertions_1.Ensure.that(rest_1.LastResponse.status(), (0, assertions_1.equals)(200))));
