/* eslint-disable no-undef */
/// <reference types="cypress" />

import { generateNewBand } from "../../__tests__/__mocks__/fakeData/newBand";
import { generateRandomId } from "../../lib/features/reservations/utils";

it("should load refreshed page from cahce after new band is added", () => {
  // check that new band is not on page
  cy.task("db:reset").visit("/bands");
  cy.findByRole("heading", { name: /avalanche of cheese/i }).should(
    "not.exist"
  );

  // add ne band via post requst to api
  const bandId = generateRandomId();
  const band = generateNewBand(bandId);
  const secret = Cypress.env("REVALIDATION_SECRET");

  cy.request("POST", `/api/bands?secret=${secret}`, { newBand: band }).then(
    (response) => {
      expect(response.body.revalidated).to.equal(true);
    }
  );

  // reload page: new band should appear
  cy.reload();
  cy.findByRole("heading", { name: /avalanche of cheese/ }).should("exist");

  // reset ISR cache to initial db conditions
  cy.resetDbAndIsrCache();
});
