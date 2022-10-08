Cypress.Commands.add("clickLogout", () => {
  cy.logoutBtn().click();
  cy.contains("Logged out successfully").should("be.visible");
  cy.log("User logged out successfully");
});

Cypress.Commands.add("assertLoginPage", () => {
  cy.url().should("include", "/login");
  cy.log("User is on login page");
});
