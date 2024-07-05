import { waitTheButton,type,clear,enterKeyboard,click,assert, enterusername, enterpassword } from "../BasePage/GeneralPage"

export class Ae_Login_Page{
    TextUserName = 'input[placeholder="Email"]'
    TextPassword = 'input[placeholder="Password"]'
    LoginButton = 'button[aria-label="LOGIN"]'
    PaymentOverview = '[fxlayout="column"] > .mat-toolbar > div'
    ErrorMesaage = '#mat-error-2'
    Navigation = 'div[class="content-wrapper"]>fuse-toolbar>mat-toolbar>div>div:nth-child(1)>button>span:nth-child(1)'

    LogOut = '.mat-button-wrapper > div > :nth-child(2)'
    TextSignOut = '[aria-label="Log Out"] > span'

    loginFromEnvironment(){
        const email = Cypress.env('EMAIL')
        const password = Cypress.env('PASSWORD')
        waitTheButton(this.LoginButton)
        type(this.TextUserName,email)
        type(this.TextPassword,password)
        click(this.LoginButton)
    }

    waitThePagePaymentOverview(){
        waitTheButton(this.PaymentOverview)
    }

    gotoValidLogin(username,password){
        clear(this.TextUserName)
        type(this.TextUserName,username)
        clear(this.TextPassword)
        type(this.TextPassword,password)
        click(this.LoginButton)
    }

    gotoNavigation(){
        click(this.Navigation)
    }

    waitForpayment(){
        waitTheButton(this.PaymentOverview)
    }

    waitForErrorMessage(){
        waitTheButton(this.ErrorMesaage)
        assert(this.ErrorMesaage," Username or Password is Incorrect ")
    }

    logoutFromApplication(){
        click(this.LogOut)
        waitTheButton(this.TextSignOut)
        click(this.TextSignOut)
        waitTheButton(this.LoginButton)

    }

}