// ***********************************************
// This example commands.js shows you how to
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

import config from "../Config.json"
import { Ae_Login_Page } from "../../PageObjects/PageActions/LoginPage"
import { Ae_needs_reuirement } from "../../PageObjects/PageActions/NeedsRequirement"

Cypress.Commands.add('login', (username,password) => {
    const login = new Ae_Login_Page
    const needs = new Ae_needs_reuirement
    cy.visit(config.baseUrl)
        //login.loginFromEnvironment()
        login.gotoValidLogin(username,password)
        login.waitForpayment()
        login.gotoNavigation()
  });
  