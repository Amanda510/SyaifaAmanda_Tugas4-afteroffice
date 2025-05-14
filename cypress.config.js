const { defineConfig } = require("cypress");
const cucumber = require("@badeball/cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor",cucumber());
    },
  },
});
