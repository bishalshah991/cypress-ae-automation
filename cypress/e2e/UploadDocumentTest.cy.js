/// <reference types="Cypress"/>


import config from "../Config.json"
import { Ae_Login_Page } from "../../PageObjects/PageActions/LoginPage"
import { Ae_needs_reuirement } from "../../PageObjects/PageActions/NeedsRequirement"
import { Ae_PageElements } from "../../PageObjects/PageLocator/PageElements"
import { Ae_Upload_Document } from "../../PageObjects/Utility/UploadDocument"



describe('Verify the Login from the Application',function(){
    const login = new Ae_Login_Page
    const needs = new Ae_needs_reuirement
    const page = new Ae_PageElements
    const upload = new Ae_Upload_Document
    
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
        page.go_to_view_checklist()
        page.WaitToNeedsRequirementPage()
        upload.go_to_file_upload()
        upload.go_match_this()
        upload.go_save_button()
        page.WaitToNeedsRequirementPage()
        upload.go_to_show_mapper()
        page.WaitToNeedsRequirementPage()
        upload.download_uploaded_document()
        upload.delete_Uploaded_document()
        page.WaitToNeedsRequirementPage()
        page.go_to_Lock_out()
        upload.go_to_file_upload()
        upload.go_match_this()
        upload.go_save_button()
        page.go_to_additional_info()
        page.go_to_event_log()
        login.logoutFromApplication()
    })


})