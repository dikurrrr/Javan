/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
//URL Javan
Cypress.Commands.add('URL', function(){
    cy.visit('https://javan.co.id/')
    }
)

//clear cookies
Cypress.Commands.add('klirkuki', function(){
    //cy.wait(2000).get("[data-page-number='1'] > .textLayer", {timeout: 60000}).should('be.visible')
    cy.wait(5000).clearCookies({timeout: 60000})
    }
)

//page contactUs
Cypress.Commands.add('contactUs', function(){
    cy.wait(2000).get(".flex-shrink-0 .oe_unremovable .oe_unremovable").click()
    }
)

//contactUS - phone
Cypress.Commands.add('contactPhone', function(){
    cy.wait(2000).get("#connect li:nth-of-type(3)").click()
    }
)

//tabSolutions
Cypress.Commands.add('Solutions', function(){
    cy.wait(2000).get("#top_menu [href='/en/solution']").click()
    }
)

//privateSector
Cypress.Commands.add('privateSector', function(){
    cy.wait(2000).get("[href='/en/private-sector'] > strong").click()
    }
)
//Banking
Cypress.Commands.add('Banking', function(){
    cy.wait(2000).get("[href='/en/banking']").click()
    }
)

//BTPN
Cypress.Commands.add('BTPN', function(){
    for(let n = 0; n < 2; n ++){
        cy.wait(2000).get(".btn[href='#']").click()
        }
    }
)

//Retails
Cypress.Commands.add('Retails', function(){
    cy.wait(2000).get("[href='/en/retail']").click()
    }
)

//SPOP+
Cypress.Commands.add('SPOP', function(){
    for(let n = 0; n < 2; n ++){
        cy.wait(2000).get("section:nth-of-type(2) .btn").click()
        }
    }
)

//SYARQ
Cypress.Commands.add('SYARQ', function(){
    for(let n = 0; n < 2; n ++){
        cy.wait(2000).get("section:nth-of-type(4) .btn").click()
      }
    }
)

//productService
Cypress.Commands.add('productService', function(){
    cy.wait(2000).get(".g-col-lg-3.g-height-6 [href='/en/product-service']").click()
})

//BusinessOptimization
Cypress.Commands.add('BusinessOptimization', function(){
    for(let n = 0; n < 2; n ++){
        cy.wait(2000).get(".g-height-9 > p:nth-of-type(3)").click()
      }
    }
)

//WebAppMobileDevelopment
Cypress.Commands.add('WebAppMobileDevelopment', function(){
    cy.wait(2000).get("[href='#nav_tabs_content_1733451435092_357']").click()
    for(let n = 0; n < 2; n ++){
        cy.wait(2000).get(".show .btn").click()  
        }
    }
)

//DataAnalytics
Cypress.Commands.add('DataAnalytics', function(){
    cy.wait(2000).get("[href='#nav_tabs_content_1733451435092_358']").click()
    for(let n = 0; n < 2; n ++){
        cy.wait(2000).get(".show .btn").click() 
        }
    }
)

//ProductDevelopment
Cypress.Commands.add('ProductDevelopment', function(){
    cy.wait(2000).get("[href='#nav_tabs_content_1733451435092_359']").click()
        cy.wait(2000).get(".show .btn").click()
    }
)

//ManagedServices
Cypress.Commands.add('ManagedServices', function(){
    cy.wait(2000).get("[href='#nav_tabs_content_1733451435092_360']").click()
    for(let n = 0; n < 2; n ++){
        cy.wait(2000).get(".pb80 .btn").click()
        }
    }
)

//404 page portofolio
Cypress.Commands.add('portofolio', function(){
    cy.wait(2000).get("[href='/en/portofolio']").click()
    }
)

//404 page our-quality
Cypress.Commands.add('ourQuality', function(){
    cy.wait(2000).get("[href='/en/our-quality']").click()
    }
)

//go back
Cypress.Commands.add('goBack',function(){
    cy.wait(1000).go('back').wait(2000).get("[href='/en/education']").click()
    cy.wait(2000).get("#wrapwrap").scrollTo('bottom')
    cy.wait(1000).go('back').wait(2000).get("[href='/en/energy']").click()
    cy.wait(2000).get("#wrapwrap").scrollTo('bottom')
    cy.wait(1000).go('back').wait(2000).get("[href='/en/retail']").click()
    cy.wait(2000).get("#wrapwrap").scrollTo('bottom')
    cy.wait(1000).go('back').wait(2000).get("[href='/en/transportation']").click()
    cy.wait(2000).get("#wrapwrap").scrollTo('bottom')
    cy.wait(1000).go('back').wait(2000).get("[href='/en/telecommunication']").click()
}
)








