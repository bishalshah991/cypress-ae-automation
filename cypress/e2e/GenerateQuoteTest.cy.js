/// <reference types="Cypress"/>


import config from "../Config.json"
import { Ae_Login_Page } from "../../PageObjects/PageActions/LoginPage"
import { Ae_Policy_Search_Page } from "../../PageObjects/PageActions/PolicySearch"
import { Ae_Generate_Quote_Page } from "../../PageObjects/PageActions/Generatequote"
import { Ae_handling_calender } from "../../PageObjects/Utility/Calendar"
import { generatenRandomNumber } from "../../PageObjects/BasePage/GeneralPage"
import { Ae_PageElements } from "../../PageObjects/PageLocator/PageElements"

describe('Verify the Generate Quote page',function(){
    const login = new Ae_Login_Page
    const policy = new Ae_Policy_Search_Page
    const generate = new Ae_Generate_Quote_Page
    const calendar = new Ae_handling_calender
    const page = new Ae_PageElements

    this.beforeEach(function(){
        cy.visit(config.baseUrl)
        
        //login.loginFromEnvironment()
        login.gotoValidLogin(config.UsernameCsr,config.Password)
        login.waitForpayment()
        login.gotoNavigation()
    })


    it('Search the Policy, Generate Quote and Claim Information',function(){
        policy.gotoPolicySearchTab()

        // policy.enterThePolicyFromEnvironment()
        policy.enterthePolicyFromLocal(config.CSRPolicy)

        policy.gotoThreeDots()
        generate.waitforGeneratePage()
        calendar.enter_calendar_Date()
        generate.enter_detail_cause_of_death()
        generate.enter_radio_button_first()
        generate.enter_funeral_home_benefit()
        generate.go_to_generate_quote_button()
        generate.go_to_claim_type()
        generate.go_to_spoke_to(config.TestData)
        generate.go_to_relationship()
        generate.go_to_Phone(generatenRandomNumber(10))
        generate.go_to_accept()
        page.WaitToNeedsRequirementPage()
        login.logoutFromApplication()
    })
    
})