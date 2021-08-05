/// <reference types="cypress" />

import articles from '../support/pages/article'


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
