/// <reference types="Cypress"/>


import config from "../Config.json"
import { generateRandomText } from "../../PageObjects/BasePage/GeneralPage"
import { Ae_Login_Page } from "../../PageObjects/PageActions/LoginPage"
import { Ae_PageElements } from "../../PageObjects/PageLocator/PageElements"
import { Ae_Fh_Research } from "../../PageObjects/PageActions/FhResearch"
import { Ae_Payment } from "../../PageObjects/PageActions/Payment"

describe('Verify the Login from the Application',function(){
    const login = new Ae_Login_Page
    const page = new Ae_PageElements
    const research = new Ae_Fh_Research
    const payment = new Ae_Payment
    
    this.beforeEach(function(){
        cy.visit(config.baseUrl)
    })

    it("Verify the valid login through application",function(){
        //login.loginFromEnvironment()
        login.gotoValidLogin(config.UsernameCsr,config.Password)
        login.waitForpayment()
        login.gotoNavigation()
        research.scroll_the_tx_recon_audit_flow()
        research.search_the_policy(config.CSRPolicy)
        research.go_to_checklist_page()
        page.WaitToNeedsRequirementPage()
        page.go_to_assign_to_me()
        page.WaitToNeedsRequirementPage()
        page.go_to_approve_tab()
        page.WaitToNeedsRequirementPage()
        payment.go_to_payment()
        payment.go_to_terminate_tab()
        payment.go_to_select_category(generateRandomText(20))

    })


})