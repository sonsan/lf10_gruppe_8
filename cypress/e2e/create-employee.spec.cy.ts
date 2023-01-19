describe('create employee tests', () => {
    beforeEach(() => {
        cy.visit('/employee');
    })

    it('button exists', () => {
        cy.get('button').contains('Create Employee')
    })

    it('opens dialog when pressed', () => {
        cy.get('button').contains('Create Employee').click()
        let dialog = cy.get('mat-dialog-container')
        dialog.should('exist').and('be.visible')
    })

    it('contains all required input fields', () => {
        cy.get('button').contains('Create Employee').click()
        let dialog = cy.get('mat-dialog-container')
        dialog.should('exist')
          .and('be.visible')
          .and('contain', 'First Name')
          .and('contain', 'Last Name')
          .and('contain', 'Street')
          .and('contain', 'Postcode')
          .and('contain', 'City')
          .and('contain', 'Phone #')
          .and('contain', 'Skill')
    })

    it('clicking cancel closes the dialog', () => {
        cy.get('button').contains('Create Employee').click()
        let dialog = cy.get('mat-dialog-container')
        dialog.get('button').contains('Cancel').click()
        dialog.should('not.exist')
    })

    it('clicking save will make a progress indicator appear', () => {
        cy.get('button').contains('Create Employee').click()
        let dialog = cy.get('mat-dialog-container')
        dialog.get('button').contains('Save').click()
        dialog.get('mat-spinner').should('exist').should('be.visible')

        // close the dialog
        dialog.get('button').contains('Cancel').click()
    })
})
