// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://javan.co.id/')
//   })
// })

it('contactUs - Retails', () => {
  cy.URL()
  cy.Solutions()
  cy.privateSector()
  cy.Banking()
  cy.wait(2000).get("#wrapwrap").scrollTo('bottom')
  cy.BTPN()
  cy.goBack()
  
  cy.klirkuki()
})
