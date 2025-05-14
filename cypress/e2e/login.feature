Feature: Login to Saucedemo

    Scenario: Success Login with Valid Credentials
    Given I open the Saucedemo Login Page
    When I enter username "standard_user" and password "secret_sauce"
    And I click the Login button
    Then I should be redirected to the inventory page


    Scenario: Fail Login with Invalid Credentials
    Given I open the Saucedemo Login Page
    When I enter username "tes" and password "pass123"
    And I click the Login button
    Then I should see an error message