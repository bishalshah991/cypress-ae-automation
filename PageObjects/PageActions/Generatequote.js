import { waitTheButton,type,clear,enterKeyboard,click,assert, enterusername, enterpassword } from "../BasePage/GeneralPage"

export class Ae_Generate_quote_Page{

    
    GenerateQuoteIcon = 'button[id="generate-quote-btn"] >span:nth-of-type(1)>mat-icon'
    NoSelect = 'mat-select[id="causeofdeath"]'
    Cause_of_Death = 'mat-option[role="option"]:nth-child(3)'
    EnterBenefit = 'div[class^="view ng-tns-c"]>div:nth-of-type(2)>form>div:nth-of-type(3)>fuse-input-radio-control>div>mat-radio-group>mat-radio-button:nth-of-type(1)>label>span:nth-of-type(2)>mat-label'
    GenerateQuoteButton = "button[id='generate-quote']"
    StartClaim = 'button[aria-label="Start Claim"]'

    waitforGeneratePage(){
        waitTheButton(this.GenerateQuoteIcon)
        cy.wait(2000)
    }

    goToGenerateIcon(){
        click(this.GenerateQuoteIcon)
        waitTheButton(this.GenerateQuoteButton)

    }

    enter_cause_of_death(){
        click(this.NoSelect)
        click(this.Cause_of_Death)
    }

    enter_benefit_home_page(){
        click(this.EnterBenefit)
        click(this.GenerateQuoteButton)
        waitTheButton(this.StartClaim)
        click(this.StartClaim)
    }



    

}