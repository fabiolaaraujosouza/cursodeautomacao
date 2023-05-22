const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    viewportHeight: 768,
    viewportWidth: 1024,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});