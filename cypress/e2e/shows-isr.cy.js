/* eslint-disable no-undef */
/// <reference types="cypress" />

it("skips client-side bundle, confirming data from ISR cached", () => {
  // reference:
  cy.request("/shows")
    .its("body")
    .then((html) => {
      // remove the application code bundle
      const staticHtml = html.replace('<script src="/bundle.js"></script>', "");
      cy.state("document").write(staticHtml);

      cy.findAllByText(/2022 apr 1[567]/i).should("have.length", 3);
    });
});
