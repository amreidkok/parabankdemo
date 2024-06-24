const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "fvbpxy",

  env: {
    url: "https://parabank.parasoft.com/",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
