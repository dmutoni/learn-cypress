/// <reference types="cypress" />

describe("Basic test", () => {
  it("Every basic element exists", () => {
    cy.visit("https://www.dirask.com");

    cy.contains("What chemistry").should("exist");
    cy.get("div#noroot").should("not.exist");
    cy.get("a.left-menu-button-light-1597872958").click();
    cy.contains("symbol means").should(
      "have.text",
      "What chemistry vial symbol means near API method on MDN documentation?"
    );
    cy.contains("symbol means").should("exist");
  });
});
