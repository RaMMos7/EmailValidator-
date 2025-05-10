describe('Validação do e-mail', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('Deve mostrar o erro para o email com domínio inválido', () => {
    cy.get('#login-email').type('miguelramos@hotmail.com'); 
    cy.get('#login-password').type('1234');
    cy.get('[type="submit"]').click();
    cy.get('#errorMsg').should('contain', 'Digite um e-mail valido com o dominio correto');
  });

  it('Deve mostrar erro de credenciais inválidas para email não cadastrado', () => {
    cy.get('#login-email').type('ruanridley@gmail.com'); 
    cy.get('#login-password').type('1234');
    cy.get('[type="submit"]').click();
    cy.get('#errorMsg').should('contain', 'Credenciais inválidas.');
  });

  it('Deve aceitar email válido cadastrado e fazer login com sucesso', () => {
    cy.get('#login-email').type('miguelramoss@gmail.com'); 
    cy.get('#login-password').type('1234');
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alerta');
    });
    cy.get('[type="submit"]').click();
    cy.get('@alerta').should('have.been.calledWith', 'Login realizado com sucesso');
  });
});
