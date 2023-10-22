context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('basic nav', () => {
    cy.url()
      .should('eq', 'http://localhost:3333/')

    cy.contains('Search the world\'s newest English language hadith database.')
      .should('exist')

    /* cy.get('#input')
      .type('Vitesse{Enter}')
      .url()
      .should('eq', 'http://localhost:3333/hi/Vitesse') */

    cy.get('[btn]')
      .click()
      .url()
      .should('eq', 'http://localhost:3333/')
  })

  it('markdown', () => {
    cy.get('[data-test-id="about"]')
      .click()
      .url()
      .should('eq', 'http://localhost:3333/about')
  })
})
