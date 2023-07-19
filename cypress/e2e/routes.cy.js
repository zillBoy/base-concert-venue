/* eslint-disable no-undef */
/// <reference types="cypress" />

it("displays correct heading when navigating to shows route", () => {
  cy.visit("/");
  cy.findByRole("button", { name: /shows/i }).click();
  cy.findByRole("heading", { name: /upcoming shows/i }).should("exist");
});

it("displays correct heading when navigating to bands route", () => {
  cy.visit("/");
  cy.findByRole("button", { name: /bands/i }).click();
  cy.findByRole("heading", {
    name: /our illustrious performers/i,
  }).should("exist");
});

it("reset the database", () => {
  cy.task("db:reset");
});
