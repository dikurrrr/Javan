// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://javan.co.id/')
//   })
// })

it('contactUs', () => {
  cy.URL()
  cy.wait(2000).get("#wrapwrap").scrollTo('bottom')
  cy.portofolio()
  cy.wait(1000).go('back').get("#wrapwrap").scrollTo('bottom')
  cy.ourQuality()

  cy.klirkuki()
})
