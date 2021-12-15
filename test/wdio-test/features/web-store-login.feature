Feature: Login to Webstore

    Login action on web store portal using valid and invalid credentials

    # Background:
    #     Given Alice login to web store

    #   Scenario Outline: Using username and password to log in

    #     When she logs in using "<username>" and "<password>"
    #     Then she should see that authentication has <outcome>

    #     Examples:
    #       | username | password             | outcome   |
    #       | tomsmith | SuperSecretPassword! | succeeded |
    #       | foobar   | barfoo               | failed    |

    Scenario: Login using valid cerdencials
        Given Alice login to web store
        And she shloud see page title "Title"
        Then she clicked on "sign_in_button"
        Then she enter "username" at "password_entry"
        Then she enter "password" at "password_entry"
        And she clicked on "login_button"
        Then she shloud see "success_message" at "message_field"


    Scenario: Login using Invalid cerdencials
        Given Alice login to web store
        And she shloud see page title "Title"
        Then she clicked on "sign_in_button"
        Then she enter "username" at "password_entry"
        Then she enter "password" at "password_entry"
        And she clicked on "login_button"
        Then she shloud see "failed_message" at "message_field"


