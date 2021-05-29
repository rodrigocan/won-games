// load type definitions from Cypress module
/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
}

type FieldsAtrributes = {
  label: string
  name: string | number
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
   * Custom command to get element by data-cy values
   * @example cy.getByDataCy('selector')
   */
  interface Chainable {
    getByDataCy(selector: string): Chainable<Element>
  }

  /**
   * Custom command to get fields by label
   * @example cy.getFields([{ label: 'foo', name: 'foo' }])
   */
  interface Chainable {
    getFields(fields: FieldsAtrributes[]): Chainable<Element>
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

  /**
   * Custom command to check if value is less than price
   * @example cy.shouldBeLessThan(100)
   */
  interface Chainable {
    shouldBeLessThan(value: number): Chainable<Element>
  }

  /**
   * Custom command to check if value is greater than price
   * @example cy.shouldBeGreaterThan(50)
   */
  interface Chainable {
    shouldBeGreaterThan(value: number): Chainable<Element>
  }
}
