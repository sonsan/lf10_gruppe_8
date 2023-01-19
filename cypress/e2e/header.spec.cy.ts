describe('header tests', () => {
  beforeEach(() => {
    cy.visit('/employee')
  })

  it('header contains all required components', () => {
    cy.get('.header')
      .find('span')
      .should('exist')
      .and('be.visible')
      .get('nav')
      .should('exist')
      .and('be.visible')
      .get('button')
      .should('exist')
      .contains('Log out')
      .and('be.visible')
  })

  it('clicking on the middle will route to /employee', () => {
    // prepare
    cy.on('url:changed', () => {
      cy.url().should('contain', '/employees')
    })

    cy.get('.header')
      .get('nav')
      .should('exist')
      .and('be.visible')
      .click()
  })

  it('clicking "log out" will redirect to login page', () => {
    cy.on('url:changed', () => {
      cy.url().should('contain', '/login')
    })

    cy.get('.header')
      .get('button')
      .contains('Log out')
  })
})
