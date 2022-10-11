{
  /* <reference types="cypress" />; */
}

describe("Quales Course Management API Regression Test suite", () => {
  let courseId = "";
  const path = "/api/courses/";
  const apiUrl = Cypress.env("apiUrl");

  context("POST Request tests", () => {
    it("Validate that I can use a POST method to create a course via Cypress API method", () => {
      //Test successful post request
      cy.request({
        method: "POST",
        url: apiUrl + path,
        body: {
          title: "Edikan Ekanem Postman Testing",
          categoryId: 2,
          description: "Testing postman api",
          courseUrl: "https://www.youtube.com/watch?v=8vXoMqWgbQQ",
          imageUrl: "https://source.unsplash.com/user/c_v_r/900x800",
          location: "online",
          isPremium: true,
        },
      }).as("createACourseRequest");
      cy.get("@createACourseRequest").then((res) => {
        const responseBody = res.body;

        cy.log(JSON.stringify(responseBody));
        expect(res.status).to.eq(200);
        courseId = responseBody.id;
        cy.log(JSON.stringify(courseId));
        expect(responseBody).to.have.property("id");
        expect(responseBody).to.have.property("title");
      });
    });
  });

  context("GET Request tests", () => {
    it("Validate that I can use a GET method to list all courses via Cypress API method", () => {
      //Test successful get request
      cy.request({
        method: "GET",
        url: apiUrl + path,
      }).as("searchAllCoursesRequest");
      cy.get("@searchAllCoursesRequest").then((res) => {
        const responseBody = res.body;
        cy.log(JSON.stringify(res.body));
        expect(res.status).to.eq(200);
        expect(responseBody.data[0]).to.have.property("id");
        expect(responseBody.data[0]).to.have.property("title");
      });
    });
  });

  context("GET Request tests", () => {
    it("Validate that I can use a GET method to get a course via Cypress API method", () => {
      //Test successful get request
      cy.request({
        method: "GET",
        url: apiUrl + path + courseId,
      }).as("searchACourseRequest");
      cy.get("@searchACourseRequest").then((res) => {
        const responseBody = res.body;
        cy.log(JSON.stringify(res.body));
        expect(res.status).to.eq(200);
        expect(responseBody).to.have.property("id");
        expect(responseBody).to.have.property("title");
      });
    });
  });

  context("DEL Request tests", () => {
    it("Validate that I can use a DEL method to delete a course via Cypress API method", () => {
      //Test successful delete request
      cy.request({
        method: "DELETE",
        url: apiUrl + path + courseId,
      }).as("deleteACourseRequest");
      cy.get("@deleteACourseRequest").then((res) => {
        cy.log(JSON.stringify(res.body));
        expect(res.status).to.eq(204);
      });
    });
  });
});
