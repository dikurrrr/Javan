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
  cy.wait(1000).go('back').wait(2000).get("[href='/en/education']").click()
  cy.wait(2000).get("#wrapwrap").scrollTo('bottom')
  cy.wait(1000).go('back').wait(2000).get("[href='/en/energy']").click()
  cy.wait(2000).get("#wrapwrap").scrollTo('bottom')
  cy.wait(1000).go('back').wait(2000).get("[href='/en/retail']").click()
  cy.wait(2000).get("#wrapwrap").scrollTo('bottom')
  cy.wait(1000).go('back').wait(2000).get("[href='/en/transportation']").click()
  cy.wait(2000).get("#wrapwrap").scrollTo('bottom')
  cy.wait(1000).go('back').wait(2000).get("[href='/en/telecommunication']").click()

  cy.klirkuki()
})
