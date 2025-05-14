Feature: Shopping Cart

  Scenario: Add item to cart
    Given I am logged in
    When I add "Sauce Labs Backpack" to the cart
    Then the cart badge should show 1 item
