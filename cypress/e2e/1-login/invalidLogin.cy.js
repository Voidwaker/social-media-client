/* eslint-disable no-undef */
describe('User Login with Invalid Credentials', () => {
  it('should not allow the user to log in with invalid credentials', () => {
    cy.visit('/');

    cy.get('button[data-auth="login"]').first().click();

    cy.get('#loginEmail').type('invaliduser@stud.com');
    cy.get('#loginPassword').type('InvalidPassword123');

    cy.get('#loginForm .btn.btn-success').click();

    cy.get('#loginEmail')
      .invoke('prop', 'validationMessage')
      .should('not.be.empty');

    cy.get('#loginForm').should('be.visible');

    cy.get('.profile-info').should('not.exist');
  });
});
