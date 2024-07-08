
import { waitTheButton,type,click,scrollpageHorizontal } from "../BasePage/GeneralPage";


export class Ae_Claim_information{

    ClaimIntake = 'div[class^="checklists ng-tns"]>ngx-gridster>div>ngx-gridster-item:nth-child(3)>div>div:nth-child(1)>div>div:nth-child(1)>div>span>mat-icon'
    PolicyNumber = 'input[class^="mat-input-element mat-form-field-autofill-control ctrl po"]'
    InsuredName = 'input[class^="mat-input-element mat-form-field-autofill-control ctrl I"]'
    EmailID = 'input[class^="mat-input-element mat-form-field-autofill-control ctrl email"]'
    FuneralHome = 'div[class^="content ng-tns-c4"]>form>div:nth-of-type(5)>fuse-input-combo-control>mat-form-field>div>div:nth-of-type(1)>div>mat-select[id^="amount_to_be_paid_to_funeral_home"]'
    FunealHomeValue = 'mat-option[role="option"]:nth-child(2)'
    FuneralState = 'div[class^="content ng-tns-c4"]>form>div:nth-of-type(6)>fuse-input-combo-control>mat-form-field>div>div:nth-of-type(1)>div>mat-select[id="select_funeral_state"]'
    FuneralStateValue = 'div[id="select_funeral_state-panel"]>mat-option:nth-of-type(3)'
    TextFuneralHome = 'input[class^="mat-input-element mat-form-field-autofill-control ctrl fhN"]'
    TextFuneralPhone = 'input[class^="mat-input-element mat-form-field-autofill-control ctrl en"]'
    TextFuneralAddress = 'input[class^="mat-input-element mat-form-field-autofill-control ctrl fhA"]'
    TextFuneralHomeLicense = 'input[class^="mat-input-element mat-form-field-autofill-control ctrl fhL"]'
    UpdateClaimIntake = 'button[id="generate-quote"]'
    
    ScrollThePage(){
        scrollpageHorizontal(this.ClaimIntake)
        click(this.ClaimIntake)
        waitTheButton(this.PolicyNumber)
        cy.wait(3000)
    }

    enterPolicyNumber(text){
        type(this.PolicyNumber,text)
    }

    enterInsuredName(text){
        type(this.InsuredName,text)
    }

    enterEmailAddress(text){
        type(this.EmailID,text)
    }

    enterFuneralHome(){
        scrollpageHorizontal(this.FuneralHome)
        click(this.FuneralHome)
        waitTheButton(this.FunealHomeValue)
        click(this.FunealHomeValue)
        cy.wait(2000)
    }

    enterFuneralState(){
        click(this.FuneralState)
        waitTheButton(this.FuneralStateValue)
        click(this.FuneralStateValue)
    }

    enterInputFuneralHome(text){
        type(this.TextFuneralHome,text)
    }

    enterInputFuneralPhoneNumber(text){
        type(this.TextFuneralPhone,text)
    }

    enterFuneralHomeAddress(text){
        type(this.TextFuneralAddress,text)
    }

    enterFuneralLicenseNumber(text){
        type(this.TextFuneralHomeLicense,text)
        click(this.UpdateClaimIntake)
    }

    scrollThePage(){
        waitTheButton(this.ClaimIntake)
        scrollpageHorizontal(this.ClaimIntake)
    }

    ScrollThePageToClaimIntake(){
        cy.wait(3000)
        scrollpageHorizontal(this.ClaimIntake)
    }
    

}