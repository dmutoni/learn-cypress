/// <reference types="cypress" />

describe("Test urls", () => {
  it("Testing if page contains forgot password", () => {
    // cy.viewport(516, 561);
    cy.viewport("macbook-16");
    cy.visit("https://groovin.vercel.app/");
    cy.contains("Login").click();
    cy.contains("Forgot password").click();
    cy.url().should("include", "forgotpassword");
    cy.url().should("eq", "https://groovin.vercel.app/forgotpassword");
    cy.go("back");
  });
});
