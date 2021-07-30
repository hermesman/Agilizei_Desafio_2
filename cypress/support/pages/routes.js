class Routes {

    as = {
        postArticles: 'postArticles',
        getArticlesTitle: 'getArticleTitle',
        getArticlesTitleComments:'getArticleTitleComments'
    }


    init(){
        cy.intercept('POST', '**/api/articles',).as(this.as.postArticles)
        cy.intercept('GET', '**/articles/melmis-title-**',).as(this.as.getArticlesTitle)
        cy.intercept('GET', '**/articles/melmis-title-**/comments',).as(this.as.getArticlesTitleComments)
        
    }
}

export default new Routes();