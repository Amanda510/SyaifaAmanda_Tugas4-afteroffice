Feature: Checkout

  Scenario: Complete checkout process
    Given I have 1 item in the cart
    When I proceed to checkout and enter valid info
    Then I should see a confirmation message
