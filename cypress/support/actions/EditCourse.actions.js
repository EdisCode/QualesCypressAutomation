Cypress.Commands.add("editCourses", () => {
  cy.courseToBeModified().click();

  cy.editBtn().click();

  cy.courseTitleInputField().clear().type("New course created");

  cy.updateCourseBtn().click();

  cy.modifiedCourseModal().should("be.visible");

  cy.log("A course has been modified successfully");
});
