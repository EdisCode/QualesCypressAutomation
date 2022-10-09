{
  /* <reference types="cypress" />; */
}

describe("Quales Course Management API Regression Test suite", () => {
  context("POST Request tests", () => {
    it("Validate that I can use a POST methodto create a course via Cypress API method", () => {
      //Test successful login
      cy.request({
        method: "POST",
        url: "https://notification-service.ishchoolapi.xyz/api/courses/",
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
        cy.log(JSON.stringify(res.body));
        expect(res.status).to.eq(200);
      });
    });
  });
});
