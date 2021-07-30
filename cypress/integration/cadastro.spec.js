/// <reference types="cypress" />


const faker = require('faker')

context('Cadastro', () => {
    it('Cadastrar um novo usuário', () => {
        // https://demo.realworld.io/#/register
        cy.visit('register');
        
        cy.get('input[ng-model*=username]').type(faker.name.firstName () + faker.name.lastName());
        cy.get('input[ng-model*=email]').type(faker.internet.email());
        cy.get('input[ng-model*=password]').type('senha1234567890');
        cy.get('button.btn-primary').click();

    });
});