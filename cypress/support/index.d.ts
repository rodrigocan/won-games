// load type definitions from Cypress module
/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
}

declare namespace Cypress {
  /**
   * Custom command to visit google page
   * @example cy.google()
   */
  interface Chainable {
    google(): Chainable<Window>
  }

  /**
   * Custom command to check banner in page
   * @example cy.shouldRenderBanner()
   */
  interface Chainable {
    shouldRenderBanner(): Chainable<Element>
  }

  /**
   * Custom command to check showcase in page
   * @example cy.shouldRenderShowcase()
   */
  interface Chainable {
    shouldRenderShowcase(attrs: ShowcaseAttributes): Chainable<Element>
  }
}
