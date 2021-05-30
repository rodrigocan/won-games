// load type definitions from Cypress module
/// <reference types="cypress" />

type User = {
  username: string
  email: string
  password: string
}

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
}

type FieldsAttributes = {
  label: string
  name: string | number
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit google page
     * @example cy.google()
     */
    google(): Chainable<Window>

    /**
     * Custom command to sign up
     * @example cy.signUp({ username: 'will', email: 'm@gmail.com', password: '123' })
     */
    signUp(user: User): Chainable<Element>

    /**
     * Custom command to sign in
     * @example cy.signIn()
     */
    signIn(email?: string, password?: string): Chainable<Element>

    /**
     * Custom command add game to cart by index.
     * @example cy.addToCartByIndex(3)
     */
    addToCartByIndex(index: number): Chainable<Element>

    /**
     * Custom command remove game from cart by index.
     * @example cy.removeFromCartByIndex(3)
     */
    removeFromCartByIndex(index: number): Chainable<Element>

    /**
     * Custom command to get element by data-cy
     * @example cy.getByDataCy('selector')
     */
    getByDataCy(selector: string): Chainable<Element>

    /**
     * Custom command to get fields by label
     * @example cy.getFields([{ label: 'foo', name: 'foo' }])
     */
    getFields(fields: FieldsAttributes[]): Chainable<Element>

    /**
     * Custom command to check banner in page
     * @example cy.shouldRenderBanner()
     */
    shouldRenderBanner(): Chainable<Element>

    /**
     * Custom command to check banner in page
     * @example cy.shouldRenderShowcase()
     */
    shouldRenderShowcase(attrs: ShowcaseAttributes): Chainable<Element>

    /**
     * Custom command to check if value is less than
     * @example cy.shouldBeLessThan(100)
     */
    shouldBeLessThan(value: number): Chainable<Element>

    /**
     * Custom command to check if value is greater than
     * @example cy.shouldBeGreaterThan(100)
     */
    shouldBeGreaterThan(value: number): Chainable<Element>
  }
}
