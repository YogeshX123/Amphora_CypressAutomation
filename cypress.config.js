const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2",
    env: {
      petId: null   // initialize env var
    },
    setupNodeEvents(on, config) {
      // implement event listeners if needed
    },
  },
});
