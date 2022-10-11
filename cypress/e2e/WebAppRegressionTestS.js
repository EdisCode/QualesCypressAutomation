{
  /* <reference types="cypress" />; */
}

describe("Quales Course Management Regression Test suite for Standard Users", () => {
  beforeEach(() => {
    //Login
    cy.Login({});
  });

  context("In app tests", () => {
    it("Validate that users with valid credentials can login to the app successfully", () => {
      //Test successful login
      cy.checkCoursesDisplay({});
    });

    it("Validate that courses can be created successfully", () => {
      //Test courses are added successfully.
      cy.addCourses({});
    });

    it("Validate that created course can be modified", () => {
      //Modify courses
      cy.editCourses({});
    });
  });

  context("Tear Down", () => {
    it("Validate that users can logout of the app successfully", () => {
      //Test successful logout
      cy.clickLogout({});
    });
  });
});
