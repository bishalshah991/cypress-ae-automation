/// <reference types="Cypress"/>


import config from "../Config.json"
import { Ae_Login_Page } from "../../PageObjects/PageActions/LoginPage"
import { Ae_Policy_Search_Page } from "../../PageObjects/PageActions/PolicySearch"
import { Ae_Generate_Quote_Page } from "../../PageObjects/PageActions/GenerateQuote"
import { Ae_handling_calender } from "../../PageObjects/Utility/Calendar"
import { generatenRandomNumber } from "../../PageObjects/BasePage/GeneralPage"
import { Ae_PageElements } from "../../PageObjects/PageLocator/PageElements"


describe('Sequential Test Execution with Custom Command',function(){

    const policy = new Ae_Policy_Search_Page
    const generate = new Ae_Generate_Quote_Page
    const calendar = new Ae_handling_calender
    const page = new Ae_PageElements
    const login = new Ae_Login_Page

    before(() => {
        // Login only once using custom command
        cy.login(config.UsernameCsr,config.Password)
      });

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
        
    })

    it("Generate the Claim Intake",function(){
        login.waitForpayment()
        login.gotoNavigation()
        needs.gotoNeedsRequirement()

        //needs.enterThePolicyNumber(config.CSRPolicy)
        needs.enterThePolicyNumberFromEnvironment()

        needs.goToDetailPage()
        claimInformation.ScrollThePage()
        claimInformation.enterPolicyNumber(generatenRandomNumber())
        claimInformation.enterInsuredName(config.InsuredName)
        claimInformation.enterEmailAddress(config.UsernameCsr)
        generate.enter_detail_cause_of_death()
        claimInformation.enterFuneralHome()
        claimInformation.enterFuneralState()
        claimInformation.enterInputFuneralHome(config.TestData)
        claimInformation.enterInputFuneralPhoneNumber(generatenRandomNumber())
        claimInformation.enterFuneralHomeAddress(config.Address)
        claimInformation.enterFuneralLicenseNumber(generatenRandomNumber(5))
        page.WaitToNeedsRequirementPage()
        claimInformation.ScrollThePageTillClaimNote()
        claimInformation.AddNewInternalNote(generateRandomText(20))
        claimInformation.goToSendEmail()
        claimInformation.goToClearEmail(config.UsernameCsr)
        claimInformation.enterSubject(generateRandomText(5))
        claimInformation.enterTheEmail(generateRandomText(20))
        page.go_to_inbox()
    })

    it("Discord Claim",function(){
        //login.loginFromEnvironment()
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