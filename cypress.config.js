const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: "pcrtom",
  reporter: "mochawesome",
  retries: {
    runMode: 2,
    openMode: 1,
  },
  env: {
    username: "ay@mail.com",
    usernameP: "ayp@mail.com",
    password: "pass1234",
    apiUrl: "https://notification-service.ishchoolapi.xyz",
  },
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 500000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    // setupNodeEvents(on, config) {
    //   return require('./cypress/plugins/index.js')(on, config)
    // },
    baseUrl: "http://tawdry-rule.surge.sh/",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
});
