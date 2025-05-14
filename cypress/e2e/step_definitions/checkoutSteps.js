import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I have 1 item in the cart", () => {
  cy.visit("https://www.saucedemo.com/");
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get(".shopping_cart_link").click();
});

When("I proceed to checkout and enter valid info", () => {
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="firstName"]').type("Amanda");
  cy.get('[data-test="lastName"]').type("Test");
  cy.get('[data-test="postalCode"]').type("12345");
  cy.get('[data-test="continue"]').click();
  cy.get('[data-test="finish"]').click();
});

Then("I should see a confirmation message", () => {
  cy.contains("Thank you for your order!").should("be.visible");
});
