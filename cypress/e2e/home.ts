/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should render home sections', () => {
    // visitar a página
    cy.visit('/')

    cy.get('.slick-slider').within(() => {
      cy.findByRole('heading', { name: /biomutant/i })
      cy.findByRole('link', { name: /buy now/i })
    })
  })
})
