/* eslint-disable no-undef */

describe('User Login', () => {
  it('should allow the user to log in with valid credentials', () => {
    cy.visit('/');

    cy.get('button[data-auth="login"]').first().click();

    cy.get('#loginEmail').type('sigvaa52915@stud.noroff.no');
    cy.get('#loginPassword').type('Noroff123');

    cy.get('#loginForm .btn.btn-success').click();

    cy.get('button[data-auth="logout"]').should('be.visible');
  });
});
