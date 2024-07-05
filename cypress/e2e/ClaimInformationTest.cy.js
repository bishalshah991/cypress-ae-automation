/// <reference types="Cypress"/>


import config from "../Config.json"
import { generateRandomText,generatenRandomNumber } from "../../PageObjects/BasePage/GeneralPage"
import { Ae_Login_Page } from "../../PageObjects/PageActions/LoginPage"
import { Ae_needs_reuirement } from "../../PageObjects/PageActions/NeedsRequirement"
import { Ae_Claim_information } from "../../PageObjects/PageActions/ClaimInformation"
import { Ae_Generate_quote_Page } from "../../PageObjects/PageActions/GenerateQuote"


describe('Verify the Login from the Application',function(){
    const login = new Ae_Login_Page
    const needs = new Ae_needs_reuirement
    const claimInformation = new Ae_Claim_information
    const generate = new Ae_Generate_quote_Page

    this.beforeEach(function(){
        cy.visit(config.baseUrl)
    })

    it("Verify the valid login through application",function(){
        //login.loginFromEnvironment()
        login.gotoValidLogin(config.UsernameCsr,config.Password)
        login.waitForpayment()
        login.gotoNavigation()

        needs.gotoNeedsRequirement()

        needs.enterThePolicyNumber(config.CSRPolicy)
        //needs.enterThePolicyNumberFromEnvironment()

        needs.goToDetailPage()
        claimInformation.ScrollThePage()
        claimInformation.enterPolicyNumber(generatenRandomNumber())
        claimInformation.enterInsuredName(config.InsuredName)
        claimInformation.enterEmailAddress(config.UsernameCsr)
        generate.Cause_of_Death()
    })


})