/* globals cy */
    
describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
      cy.contains('Take Our Quiz').click();

      cy.url().should('include', '/quiz');

    });
});

//     it('should start quiz when Start Quiz button is clicked', () => {
//         cy.contains('Take Our Quiz').click();
//         cy.url().should('include', '/quiz');
//       });
  
//   });

