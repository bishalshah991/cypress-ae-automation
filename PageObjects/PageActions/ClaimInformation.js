
import { waitTheButton,type,click,scrollpageHorizontal, usebackspace, clear, scrollUntilText, xpathLocator, waitThePage } from "../BasePage/GeneralPage";


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

    ClaimNote = '.header > .mat-focus-indicator > .mat-button-wrapper > .mat-icon'
    InternalNote = '//span[contains(text(),"Add New Internal Note")]'
    WriteNote = 'div[class^="fr-element fr-view"]>div'
    SubmitButton = 'div[class^="mat-dialog-actions m"]>button'
    SendEmail = '(//span[contains(text()," Send Email ")])[2]'
    CrossIcon = '.mat-chip-list-wrapper > :nth-child(1) > .mat-icon'
    SelectEmail = 'input[class^="mat-autocomplete-trigger mat-chip-inpu"]'
    EmailSubject = 'input[placeholder="Enter Email Subject"]'
    SendClaim = 'button[class^="mat-focus-indicator save-button mat"]'
    
    ScrollThePage(){
        scrollpageHorizontal(this.ClaimIntake)
        click(this.ClaimIntake)
        waitTheButton(this.PolicyNumber)
    }

    enterPolicyNumber(text){
        clear(this.PolicyNumber)
        click(this.PolicyNumber)
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
        click(this.TextFuneralPhone)
        type(this.TextFuneralPhone,text)
    }

    enterFuneralHomeAddress(text){
        click(this.TextFuneralAddress)
        type(this.TextFuneralAddress,text)
    }

    enterFuneralLicenseNumber(text){
        type(this.TextFuneralHomeLicense,text)
        click(this.UpdateClaimIntake)
        waitTheButton(this.ClaimIntake)
    }

    ScrollThePageTillClaimNote(){
       cy.wait(5000)
       scrollpageHorizontal(this.ClaimIntake)
       xpathLocator(this.InternalNote)
       cy.wait(2000)
    }

    AddNewInternalNote(text){
        click(this.WriteNote)
        type(this.WriteNote,text)
        click(this.SubmitButton)
    }

    goToSendEmail(){
        cy.wait(5000)
        xpathLocator(this.SendEmail)
        cy.wait(2000)
        click(this.CrossIcon)
        cy.wait(2000)

    }

    goToClearEmail(text){
        usebackspace(this.SelectEmail)
        cy.wait(2000)
        type(this.SelectEmail,text)
        cy.wait(2000)
    }

    enterSubject(text){
        click(this.EmailSubject)
        cy.wait(5000)
        type(this.EmailSubject,text)
        cy.wait(5000)
    }

    enterTheEmail(text){
        click(this.WriteNote)
        type(this.WriteNote,text)
        click(this.SendClaim)
        cy.wait(10000)

    }

}