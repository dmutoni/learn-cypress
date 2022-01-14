/// <reference types="cypress" />

describe("Test urls", () => {
  it("Testing if page contains forgot password", () => {
    // cy.viewport(516, 561);
    cy.viewport("macbook-16");

    cy.visit("https://groovin.vercel.app/");

    cy.contains("Login").click();

    cy.get('input[name="email"]').type("admin@gmail.com");
    cy.get('input[name="password"]').type("admin");
    cy.get("form").submit();
  });
  it.only("Login shuold not work", () => {
    // cy.viewport(516, 561);
    cy.viewport("macbook-16");

    cy.visit("https://groovin.vercel.app/");

    cy.contains("Login").click();

    cy.get('input[name="email"]').type("testing123@gmail.com");
    cy.get('input[name="password"]').type("admin");
    cy.get("form").submit();
    cy.contains("Invalid email or password").should("exist");
  });
});
