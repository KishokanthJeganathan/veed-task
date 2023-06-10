/// <reference types="cypress" />

describe("testing the home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("verifies whether the Navigation link works as expected", () => {
    cy.contains("Click here to visit Favourite Repos").click();
    cy.location("pathname").should("eq", "/favourites");

    cy.contains("Click here to go to the home page").click();
    cy.location("pathname").should("eq", "/");
  });

  it("verifies whether the filtering by language works as expected on homepage", () => {
    cy.get('[data-cy="filterButton"]')
      .first()
      .click()
      .invoke("text")
      .then((text) => {
        cy.get('[data-cy="RepoCard"]').each(($el) => {
          cy.wrap($el).should("contain", text);
        });
      });
  });

  it("verifies whether a card marked as favourite is shown as such on home and is shown in favourites ", () => {
    cy.get('[data-cy="RepoCard"]').first().find("button").click();
    cy.get('[data-cy="RepoCard"]')
      .first()
      .find("button")
      .should("contain.text", "Added to Favourites");

    cy.contains("Click here to visit Favourite Repos").click();
    cy.location("pathname").should("eq", "/favourites");
    cy.get('[data-cy="RepoCard"]').should("have.length", 1);
  });
});
