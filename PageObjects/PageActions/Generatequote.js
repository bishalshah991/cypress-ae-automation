import {
    waitTheButton,click,type,clickLocator
} from "../BasePage/GeneralPage"

export class Ae_Generate_Quote_Page{
    GenerateQuoteIcon = 'button[id="generate-quote-btn"] >span:nth-of-type(1)>mat-icon'
    NoSelect = 'mat-select[id="causeofdeath"]'
    Cause_of_Death = 'mat-option[role="option"]:nth-child(3)'
    RadioYes = 'div[class^="content ng-tns-c4"]>form>div:nth-of-type(3)>fuse-input-radio-control>div>mat-radio-group>mat-radio-button:nth-of-type(1)>label>span:nth-of-type(1)'
    EnterBenefit = 'div[class^="content ng-tns-c4"]>form>div:nth-of-type(4)>fuse-input-radio-control>div>mat-radio-group>mat-radio-button:nth-of-type(1)>label>span:nth-of-type(2)'
    GenerateQuoteButton = "button[id='generate-quote']"
    StartClaim = 'button[aria-label="Start Claim"]'

    ClaimType = 'mat-select[id="claim_type"]'
    ClaimTypeValue = 'div[role="listbox"]>mat-option:nth-of-type(4)>span'
    SpokeTo = 'input[id="spoke_to"]'
    Relationship = 'div[class^="ng-trigger ng-trigger-slideInLeft ps ng-star-inserted"]>form>div:nth-of-type(3)>fuse-input-combo-control>mat-form-field>div>div:nth-of-type(1)>div>mat-select'
    RelationshipValue = 'div[id="relationship-panel"]>mat-option:nth-of-type(3)'
    Phone= 'input[class^="mat-input-element mat-form-field-autofill-control ng"]'
    CheckBox = 'span[class^="mat-checkbox-inner-container"]'
    AcceptButton = '[required=""] > .mat-button-wrapper'
    SubmitClaim = 'div[class^="mat-horizontal-content-container ng-tns-c"]>div:nth-of-type(2)>div>div:nth-of-type(5)>button:nth-of-type(1)'


    waitforGeneratePage(){
        waitTheButton(this.GenerateQuoteIcon)
        cy.wait(2000)
        click(this.GenerateQuoteIcon)
        waitTheButton(this.GenerateQuoteButton)
    }

    enter_detail_cause_of_death(){
        click(this.NoSelect)
        waitTheButton(this.Cause_of_Death)
        click(this.Cause_of_Death)
    }

    enter_radio_button_first(){
        click(this.RadioYes)
    }

    enter_funeral_home_benefit(){
        click(this.EnterBenefit)
    }

    go_to_generate_quote_button(){
        click(this.GenerateQuoteButton)
        waitTheButton(this.StartClaim)
        click(this.StartClaim)
    }

    go_to_claim_type(){
        waitTheButton(this.ClaimType)
        click(this.ClaimType)
        waitTheButton(this.ClaimTypeValue)
        click(this.ClaimTypeValue)
    }

    go_to_spoke_to(text){
        type(this.SpokeTo,text)
    }

    go_to_relationship(){
        click(this.Relationship)
        waitTheButton(this.RelationshipValue)
        click(this.RelationshipValue)
    }

    go_to_Phone(text){
        type(this.Phone,text)
    }

    go_to_accept(){
        click(this.CheckBox)
        click(this.AcceptButton)
        waitTheButton(this.SubmitClaim)
        click(this.SubmitClaim)
    }

}