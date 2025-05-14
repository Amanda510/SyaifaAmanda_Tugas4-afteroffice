import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the Saucedemo Login Page", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("I enter username {string} and password {string}", (username, password) => {
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});

And("I click the Login button", () => {
  cy.get('[data-test="login-button"]').click();
});

Then("I should be redirected to the inventory page", () => {
  cy.url().should("include", "/inventory.html");
});

Then("I should see an error message", () => {
  cy.get('[data-test="error"]').should("be.visible");
});
