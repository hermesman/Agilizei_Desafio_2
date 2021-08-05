const faker = require('faker')

const el = require('./elements').ELEMENTS

class login {
    
    acessarLogin(){
        // acessar a pagina de login
        cy.visit('login')
    }

    preencherFormulario(){
        cy.get(el.inputEmail).type(Cypress.config().user.email)
        cy.get(el.inputPassword).type(Cypress.config().user.password)
        
    }

   submeterFormulario(){
        // submeter o formulario    
        cy.get(el.buttonSubmit).click()      
   }     

    verificarLogin(){
        // verificação
        cy.url().should('contain', 'https://demo.realworld.io/#/')
    }
}

export default new login()