/* eslint-disable cypress/unsafe-to-chain-command */
describe('Navigation', () => {
  it('Should ', () => {
    // Start from the index page
    cy.visit('http://localhost:3001/');

    // Find a link with an href attribute containing "about" and click it
    cy.get('input[placeholder="Start date"]').click();

    cy.get('.ant-picker-header-view button:nth-child(2)').eq(1).click();

    cy.get('table[class="ant-picker-content"] tbody tr:nth-child(2) td:nth-child(1)').click();

    cy.get('table > tbody > tr:nth-child(2) > td:nth-child(1) div.ant-picker-cell-inner')
      .contains(3)
      .click();

    cy.get('table > tbody > tr:nth-child(2) > td:nth-child(1) div.ant-picker-cell-inner')
      .contains(7)
      .click();

    cy.get('main > section > div:nth-child(2) > h2').should('have.text', '108.885');
  });
});
