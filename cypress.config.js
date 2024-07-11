const { defineConfig } = require("cypress");

module.exports = defineConfig(
  {
  projectId: "fvbpxy",

  env: {
    url: "https://parabank.parasoft.com/",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
    reporter: 'mochawesome',
    reporterOptions: {
      charts: 'true',
      overwrite:'false',
      html : false,
      JSON : true,
      reportDir:'cypress/report/mochawesome-report'
    }
  
});
