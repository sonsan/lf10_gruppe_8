describe('employee list tests', () => {
  let employeeDb = [
      {id: 1, firstName: "Nils", lastName: "Sterz", city: "Wicker", postcode: "12345", street: "Teststreet", phone: "+49 124125 251"},
      {id: 2, firstName: "Noah", lastName: "Thiering", city: "Syke", postcode: "54321", street: "Teststreet", phone: "+49 124125 251"},
  ]
  beforeEach(() => {
      // GET /employees stub
      cy.intercept({
          method: 'GET',
          url: '/employees',
          hostname: 'localhost',
      },employeeDb).as('getEmployees')

      // DELETE /employees stub
      cy.intercept('DELETE', '/employees', (req) => {
        cy.log("AAAAA")
        employeeDb = employeeDb.filter(e => e.id !== req.body.id);
        console.log(JSON.stringify(employeeDb));
        req.reply({
          statusCode: 204
        })
      }).as('deleteEmployee')

      cy.visit('/employee');
      cy.wait(['@getEmployees'])
  })

  it('entries contain the right fields', () => {
    let table = cy.get('table')

    // all required headers are present
    table.should('exist')
      .and('contain', 'ID')
      .and('contain', 'First Name')
      .and('contain', 'Last Name')
      .and('contain', 'Street')
      .and('contain', 'Postcode')
      .and('contain', 'City')
      .and('contain', 'Actions')
  })

  it('edit action opens dialog', () => {
      cy.get('table').contains('edit').click()
      let dialog = cy.get('mat-dialog-container')
      dialog.should('exist').and('be.visible')
  })

  it('delete action opens confirmation dialog', () => {
    cy.get('table').contains('delete').click()
    let dialog = cy.get('mat-dialog-container')
      dialog.should('exist')
        .and('be.visible')
    dialog.get('button').contains('Cancel').click()
  })

  it('entries can be sorted by clicking the header', () => {
    let tableRows = cy.get('tbody tr')
    let firstRow;

    // sort by id ASC
    cy.get('thead').contains('ID').click()
    firstRow = tableRows.eq(0)
    firstRow.should('contain', 'td', '1')

    // sort by id DESC (by clicking again)
    cy.get('thead').contains('ID').click()
    firstRow = tableRows.eq(0)
    firstRow.should('contain', 'td', '2')

    // sort by last name ASC
    cy.get('thead').contains('Last Name').click()
    firstRow = tableRows.eq(0)
    firstRow.should('contain', 'td', 'Sterz')

    // sort by last name DESC
    cy.get('thead').contains('Last Name').click()
    firstRow = tableRows.eq(0)
    firstRow.should('contain', 'td', 'Thiering')
  })

  it('search bar is working as intended', () => {
    // find the search bar by it's css name and type in it
    cy.get('input[name="search"]').type('Nils')

    // table should now only be 1 element which contains Nils
    cy.get('tbody tr').should('have.length', 1)
    cy.get('tbody tr').eq(0).should('contain', 'td', 'Nils')

    // Table should display all elements again when search bar is cleared
    cy.get('input[name="search"]').clear().then
    cy.get('tbody tr').should('have.length.gt', 1)
  })

  it('confirming delete removes employee from db & table', () => {
    cy.get('table').contains('delete').click()
    let dialog = cy.get('mat-dialog-container')
      dialog.should('exist')
        .and('be.visible')
    dialog.get('button').contains('Confirm').click()
    cy.get('tbody tr').eq(0).should('not.contain', 'td', 'Nils')
  })
})
