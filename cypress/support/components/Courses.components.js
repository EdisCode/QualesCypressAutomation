Cypress.Commands.add("addCourseBtn", () => {
  cy.get("[data-testid=AddIcon]");
});

Cypress.Commands.add("coursePageLeftIcon", () => {
  cy.get("[data-testid=ChevronLeftIcon]");
});

Cypress.Commands.add("courseTitleInputField", () => {
  cy.get('[data-testid="Title*"]');
});

Cypress.Commands.add("courseDescriptionInputField", () => {
  cy.get('[data-testid="Description*"]');
});

Cypress.Commands.add("courseCategoryDropdown", () => {
  cy.get(".MuiContainer-maxWidthXl");
});

Cypress.Commands.add("qaCourseCategory", () => {
  cy.get('[data-value="1"]');
});

Cypress.Commands.add("offlineRadioButton", () => {
  cy.get("[data-testid=offline]");
});

Cypress.Commands.add("addressInputField", () => {
  cy.get('[data-testid="Address*"]');
});

Cypress.Commands.add("secondAddCourseBtn", () => {
  cy.get(".css-tzsjye > .MuiButton-root");
});

Cypress.Commands.add("successfullyAddedCourseToast", () => {
  cy.get(".Toastify__toast-body > :nth-child(2)");
});
