describe('Trello web page', function () {

    // Validating the browser connection
    it('Browser connection',function(){
        cy.visit('https://trello.com/')
        cy.title().should('equal','Trello')
    })

    it('Login page', function(){
        cy.get('.btn-link').click()
        cy.contains('h1','Log in to Trello')
    })

    // Testing with empty password
    it('Incorrect password', function() {
        cy.get('#user').type('bichitra@gmail.com')
        cy.get('#password').type('hellotest{enter}')
        cy.get('#password-error > .error-message')
          .contains('p','Incorrect email address and / or password. Do you need help ')
        cy.screenshot()
        cy.wait(200)
    })    
}) 