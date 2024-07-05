const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videoCompression: 32,
  videosFolder: 'cypress/videos/AE',
  defaultCommandTimeout: 20000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
