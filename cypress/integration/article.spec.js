/// <reference types="cypress" />

import articles from '../support/pages/article'
import Routes from '../support/pages/routes'

context('Artigos', () => {

    beforeEach(() => { 
        // Preparação
        cy.backgroundLogin()
        articles.acessarFormularioDeNovaPublicacao()

    })
        it('Criar um novo artigo', () => {
        // Ação
        articles.preencherFormulário()
        articles.submeterPublicacao()
        
        // Verificação
        articles.verificarSeAPublicacaoFoiCriadaComSucesso()
    })
    
})

    //hooks => , momentos antes / depois do teste
    //before / beforeEach
    //after / afterEach
    // AAA => Arrange Act Assert
    // => Preparação Execução Verificação/Validação