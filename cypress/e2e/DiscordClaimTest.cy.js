/// <reference types="Cypress"/>


import config from "../Config.json"
import { Ae_Login_Page } from "../../PageObjects/PageActions/LoginPage"
import { Ae_needs_reuirement } from "../../PageObjects/PageActions/NeedsRequirement"
import { Ae_PageElements } from "../../PageObjects/PageLocator/PageElements"

import { Ae_Generate_Quote_Page } from "../../PageObjects/PageActions/GenerateQuote"


describe('Verify the Login from the Application',function(){
    const login = new Ae_Login_Page
    const needs = new Ae_needs_reuirement
    const page = new Ae_PageElements
    const generate = new Ae_Generate_Quote_Page

    this.beforeEach(function(){
        cy.visit(config.baseUrl)
    })

    it("Verify the valid login through application",function(){
        //login.loginFromEnvironment()
        login.gotoValidLogin(config.UsernameCsr,config.Password)
        login.waitForpayment()
        login.gotoNavigation()
        needs.gotoNeedsRequirement()

        //needs.enterThePolicyNumberFromEnvironment
        needs.enterThePolicyNumber(config.CSRPolicy)
        needs.goToDetailPage()
        page.WaitToNeedsRequirementPage()
        page.goToDiscordClaim()
        page.clickConfimButton()
        generate.waitforGeneratePage()
        login.logoutFromApplication()
    
    })


})