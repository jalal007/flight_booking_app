describe('AirTicket App shell', () => {
  it('loads the root handover page', () => {
    cy.visit('/')
    cy.contains('Prepared for UI/UX design handover').should('be.visible')
  })
})
