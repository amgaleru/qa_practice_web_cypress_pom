const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wm5xcw",
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
