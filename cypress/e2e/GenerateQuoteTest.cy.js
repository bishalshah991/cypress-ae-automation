/// <reference types="Cypress"/>


import config from "../Config.json"
import { Ae_Login_Page } from "../../PageObjects/PageActions/LoginPage"
import { Ae_Policy_Search_Page } from "../../PageObjects/PageActions/PolicySearch"
import { Ae_Generate_quote_Page } from "../../PageObjects/PageActions/GenerateQuote"
import { Ae_handling_calender } from "../../PageObjects/Utility/Calendar"
import { Ae_Claim_information } from "../../PageObjects/PageActions/ClaimInformation"
import { generatenRandomNumber } from "../../PageObjects/BasePage/GeneralPage"
import { Ae_needs_reuirement } from "../../PageObjects/PageActions/NeedsRequirement"
import { Ae_PageElements } from "../../PageObjects/PageLocator/PageElements"

describe('Verify the Generate Quote page',function(){
    const login = new Ae_Login_Page
    const policy = new Ae_Policy_Search_Page
    const generate = new Ae_Generate_quote_Page
    const calendar = new Ae_handling_calender
    const caliminformation = new Ae_Claim_information
    const page = new Ae_PageElements

    this.beforeEach(function(){
        cy.visit(config.baseUrl)
        
        login.loginFromEnvironment()
        //login.gotoValidLogin(config.UsernameCsr,config.Password)
        login.waitForpayment()
        login.gotoNavigation()
    })


    it('Search the Policy, Generate Quote and Claim Information',function(){
        policy.gotoPolicySearchTab()

        policy.enterThePolicyFromEnvironment()
        //policy.enterthePolicyFromLocal(config.CSRPolicy)

        policy.gotoThreeDots()
        generate.waitforGeneratePage()
        generate.goToGenerateIcon()
        calendar.enter_calendar_Date()
        generate.enter_cause_of_death()
        generate.enter_benefit_home_page()
        caliminformation.enter_claim_type()
        caliminformation.enter_spoke_to(config.TestData)
        caliminformation.enter_relationship()
        caliminformation.enter_phoneNumber(generatenRandomNumber())
        caliminformation.enter_accept_button()
        page.WaitToNeedsRequirementPage()
        login.logoutFromApplication()
        cy.wait(5000)

        
    })

})