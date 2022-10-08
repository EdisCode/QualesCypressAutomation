Cypress.Commands.add("addCourses", () => {
  const randomChar = (length) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  cy.addCourseBtn().click();

  //minimize left icon
  cy.coursePageLeftIcon().click();

  //input test title
  cy.courseTitleInputField().type("Cypressweb automation" + randomChar(4));

  //input test description
  cy.courseDescriptionInputField().type(
    "Cypress Test Description" + randomChar(5)
  );

  //click course category
  cy.courseCategoryDropdown().click();

  //select Quality assurance
  cy.qaCourseCategory().click();

  //select offline
  cy.offlineRadioButton().click();

  //Type address
  cy.addressInputField().type("Cypress test address");

  //click add course
  cy.secondAddCourseBtn().click();

  //Course created sourcefully slide show should be displayed
  cy.successfullyAddedCourseToast().should("be.visible");
  cy.log("A course has been created successfully");
});
