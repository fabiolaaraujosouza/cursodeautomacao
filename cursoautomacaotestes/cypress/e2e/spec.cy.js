describe('Primeiro exercicio curso automação de testes', () => {
  it('Acessar Carreiras', () => {
    cy.visit('https://www.google.com.br/').get('#APjFqb').type('nttdata').type('{enter}')
    cy.get('.CCgQ5 > span', { timeout: 10000 }).click()

    cy.origin('https://nttdata-solutions.com/br/', () => {
      cy.get('#menu-item-32094', { timeout: 10000 }).click()
      cy.visit('carreira-na-nttdata/')
      cy.get('h2').contains('Comece Já a sua Carreira em TI!').scrollIntoView().should('be.visible')
      cy.contains('Junte-se a nossa equipe').invoke('removeAttr', 'target').click()
    })

    cy.origin('https://platform.senior.com.br', () => {
      cy.get('#pesquisar-vaga-localidade-etc').type('Arquiteto').type('{enter}')
    })
  })

})