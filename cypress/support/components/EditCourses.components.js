Cypress.Commands.add("courseToBeModified", () => {
  cy.get(":nth-child(5) > .MuiCardMedia-root");
});

Cypress.Commands.add("editBtn", () => {
  cy.get(".css-klop1v");
});

Cypress.Commands.add("updateCourseBtn", () => {
  cy.get(".css-tzsjye > .MuiButton-root");
});

Cypress.Commands.add("modifiedCourseModal", () => {
  cy.contains("Course updated successfully");
});
