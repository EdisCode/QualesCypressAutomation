Cypress.Commands.add("Login", () => {
  const username = Cypress.env("username");
  const password = Cypress.env("password");
  //Load test env
  cy.visit("/");
  //change view port to macbook 16
  cy.viewport(1536, 960);

  //Confirm site renders
  cy.assertAppLoads().should("be.visible");

  //Click Sign Button
  cy.SignBtn().click();

  //assert login page
  cy.assertLoginPage();
  //Enter username
  cy.userNameField().type(username);

  //Enter password
  cy.passwordField().type(password);
  //click login
  cy.loginBtn().click();
});

Cypress.Commands.add("checkCoursesDisplay", () => {
  cy.url().should("include", "/courses");
  cy.log("User can view courses successfully");
});
