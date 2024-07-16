/// <reference types="Cypress"/>

import { generateRandomText } from "../../PageObjects/BasePage/GeneralPage"

import config from "../Config.json"
import { Ae_Login_Page } from "../../PageObjects/PageActions/LoginPage"
import { Ae_needs_reuirement } from "../../PageObjects/PageActions/NeedsRequirement"
import { Ae_PageElements } from "../../PageObjects/PageLocator/PageElements"


describe('Verify the Login from the Application',function(){
    const login = new Ae_Login_Page
    const needs = new Ae_needs_reuirement
    const page = new Ae_PageElements


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
        page.go_to_assign_to_me()
        page.WaitToNeedsRequirementPage()

        page.go_to_claim_tag(config.ClaimTag)
        page.enter_tag_reason(generateRandomText(50))
        page.WaitToNeedsRequirementPage()
        login.gotoNavigation()
        page.go_to_Tx_recon(config.CSRPolicy)

       

    
    })


})