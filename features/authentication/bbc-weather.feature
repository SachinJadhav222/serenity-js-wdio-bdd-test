Feature: BBC Weather
    As user
    Alice want to expolre BBC web

    Scenario: Search for the City and check weather
        Given Alice visit "https://www.bbc.co.uk/"
        Then she shloud see Page title "BBC - Home"
        And she click on "weather_tab"
        Then she expect to see URL containing "weather"
        And she expect to see placeholder text "Enter a town, city or UK postcode" at "search_box"
        Then she entered "Melbourne,Australia" at "search_box"
        Then she shloud see Page title "Melbourne - BBC Weather"
        And she clicked on day "1" to check weather


