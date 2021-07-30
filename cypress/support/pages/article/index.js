const faker = require('faker')

const el = require('./elements').ELEMENTS

import Routes from '../routes'

class Articles { 
    
    acessarFormularioDeNovaPublicacao(){

        
        cy.get(el.linkNovaPublicacao).click()
    }
    
    preencherFormulário(){
        // Preencher o formulário do artigo
        cy.get(el.inputTitle).type('Melmis Title')
        cy.get(el.inputDescription).type('Cypress')
        cy.get(el.textAreaContent).type(faker.lorem.paragraph())
        cy.get(el.inputTags).type('cypress')
    }

    submeterPublicacao(){
        // submeter o artigo
                
    
        cy.get(el.buttonSubmit).click()


    }      

    verificarSeAPublicacaoFoiCriadaComSucesso(){
        cy.wait(`@${Routes.as.postArticles}`)
        .its('response.statusCode')
        .should('eq', 200);

        cy.wait(`@${Routes.as.getArticlesTitle}`)
        .its('response.statusCode')
        .should('eq', 200);

        cy.wait(`@${Routes.as.getArticlesTitleComments}`)
        .its('response.statusCode')
        .should('eq', 200);

    }
}


export default new Articles();