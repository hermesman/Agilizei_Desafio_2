/// <reference types="cypress" />

import login from '../support/pages/login'

context('Login', () => {
    it('Deve realizar login com sucesso', () => {

        login.acessarLogin()
        login.preencherFormulario()
        login.submeterFormulario()
        login.verificarLogin()
  
    });
});