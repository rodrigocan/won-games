/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should render home sections', () => {
    // visitar a página
    cy.visit('/')

    cy.get('.slick-slider').within(() => {
      cy.findByRole('heading', { name: /biomutant/i })
      cy.findByRole('link', { name: /buy now/i })

      cy.get('.slick-dots > :nth-child(2) > button').click()
      cy.wait(500)

      cy.findByRole('heading', { name: /the witcher 3/i })
      cy.findByRole('link', { name: /buy now/i })

      cy.get('.slick-dots > :nth-child(3) > button').click()

      cy.findByRole('heading', { name: /cyberpunk 2077/i })
      cy.findByRole('link', { name: /buy now/i })
    })
  })
})
