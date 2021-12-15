import { Ensure, includes } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { isVisible, Text } from '@serenity-js/webdriverio';

import { accountPageTarget } from './ui/account-page-target';

export class AccountPageTask {
    static verifyPageHeading = () =>
        Task.where(
            `Verify Page Heading`,
            Ensure.that(accountPageTarget.pageHeading(), isVisible()),
            Ensure.that(Text.of(accountPageTarget.pageHeading()), includes('Your username is invalid!')),
        );
}
