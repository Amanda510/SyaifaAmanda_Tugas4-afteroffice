import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am logged in", () => {
  cy.visit("https://www.saucedemo.com/");
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
});

When("I add {string} to the cart", (product) => {
  cy.contains(product).parents(".inventory_item").contains("Add to cart").click();
});

Then("the cart badge should show {int} item", (count) => {
  cy.get(".shopping_cart_badge").should("have.text", count.toString());
});
