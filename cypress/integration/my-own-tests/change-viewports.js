/// <reference types="cypress" />

describe("Test changing viewport", () => {
  it("Change viewport of mineduc website", () => {
    // cy.viewport(516, 561);
    cy.viewport("iphone-8");
    cy.visit("https://www.mineduc.gov.rw");
  });
});
