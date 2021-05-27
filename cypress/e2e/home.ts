/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should render home sections', () => {
    // visitar a página
    cy.visit('/')

    // selecionou os banners
    cy.shouldRenderBanner()
  })
})
