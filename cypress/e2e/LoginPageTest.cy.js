/// <reference types="Cypress"/>


import config from "../Config.json"
import { Ae_Login_Page } from "../../PageObjects/PageActions/LoginPage"

describe('Verify the Login from the Application',function(){
    const login = new Ae_Login_Page

    this.beforeEach(function(){
        cy.visit(config.baseUrl)
    })

    it("Verify the valid login through application",function(){
        login.loginFromEnvironment()
        // login.gotoValidLogin(config.UsernameCsr,config.Password)
        login.waitForpayment()
        login.logoutFromApplication()
    })

    it('Verify the in valid login',function(){
        login.gotoValidLogin(config.UsernameCsr,config.WrongPassword)
        login.waitForErrorMessage()
    })


})