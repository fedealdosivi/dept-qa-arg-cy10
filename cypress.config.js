const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "morgan": false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
