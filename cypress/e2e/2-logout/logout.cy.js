/* eslint-disable no-undef */

describe('User Logout', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.get('button[data-auth="login"]').first().click();

    cy.get('#loginEmail').type('sigvaa52915@stud.noroff.no');
    cy.get('#loginPassword').type('Noroff123');

    cy.get('#loginForm .btn.btn-success').click();

    cy.get('button[data-auth="logout"]').should('be.visible');
  });

  it('should log the user out successfully', () => {
    cy.get('button[data-auth="logout"]').click();

    cy.get('button[data-auth="login"]').should('be.visible');
  });
});
