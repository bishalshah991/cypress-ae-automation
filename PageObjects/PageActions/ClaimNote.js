
import { waitTheButton,type,click,scrollpageHorizontal, usebackspace } from "../BasePage/GeneralPage";


export class Ae_Claim_Note{

    ClaimNote = 'div[class^="checklists ng-tns"]>ngx-gridster>div>ngx-gridster-item:nth-child(5)>div>div:nth-child(1)>div>div:nth-child(1)>button>span:nth-child(1)'
    InternalNote = 'div[class^="checklists ng-tns"]>ngx-gridster>div>ngx-gridster-item:nth-child(5)>div>div:nth-child(1)>div>div:nth-child(2)>div>div:nth-child(1)>button>span:nth-child(1)'
    WriteNote = 'div[class^="fr-element fr-view"]>div'
    SubmitButton = 'div[class^="mat-dialog-actions m"]>button'
    SendEmail = 'div[class^="checklists ng-tns"]>ngx-gridster>div>ngx-gridster-item:nth-child(7)>div>div:nth-child(1)>div>div:nth-child(2)>div>div>button:nth-child(1)>span:nth-child(1)'
    CrossIcon = '.mat-chip-list-wrapper > :nth-child(1) > .mat-icon'
    SelectEmail = 'input[class^="mat-autocomplete-trigger mat-chip-inpu"]'
    EmailSubject = 'input[placeholder="Enter Email Subject"]'
    SendClaim = 'button[class^="mat-focus-indicator save-button mat"]'

    ScrollThePage(){
        cy.wait(5000)
        scrollpageHorizontal(this.ClaimNote)
        click(this.InternalNote)
        cy.wait(3000)
    }

    AddNewInternalNote(text){
        waitTheButton(this.WriteNote)
        click(this.WriteNote)
        type(this.WriteNote,text)
        waitTheButton(this.SubmitButton)
        click(this.SubmitButton)
        waitTheButton(this.InternalNote)
    }

    goToSendEmail(){
        cy.wait(3000)
        scrollpageHorizontal(this.SendEmail)
        click(this.SendEmail)
        cy.wait(3000)
        click(this.CrossIcon)
        cy.wait(3000)
    }

    goToClearEmail(text){
        usebackspace(this.SelectEmail)
        cy.wait(3000)
        type(this.SelectEmail,text)
        cy.wait(3000)
    }

    enterSubject(text){
        click(this.EmailSubject)
        cy.wait(3000)
        type(this.EmailSubject,text)
        cy.wait(3000)
    }

    enterTheEmail(text){
        click(this.WriteNote)
        type(this.WriteNote,text)
        click(this.SendClaim)

    }

   
    

}