/// <reference types="cypress" />

describe("Test events", () => {
  it("Testing on click event", () => {
    // cy.viewport(516, 561);
    cy.viewport("macbook-16");
    cy.visit("https://groovin.vercel.app/");
    cy.contains("Login").click();
  });
});
