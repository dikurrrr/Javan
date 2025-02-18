// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

// ini adalah config JavaScript
const { defineConfig } = require("cypress");


module.exports = defineConfig({
  video: true,
  videoCompression: true,
    component: {
      supportFile: 'support/component.ts'
    },
    e2e: {
      supportFile: 'cypress/support/e2e.ts'
    },
    viewportWidth: 1536,
    viewportHeight: 960,
    //set timeout
    "defaultCommandTimeout": 60000,
    "pageLoadTimeout": 60000,
    "requestTimeout":45000
    
});
