
import { waitTheButton,type,click,scrollpageHorizontal } from "../BasePage/GeneralPage";


export class Ae_Claim_information{

    ClaimIntake = 'div[class^="checklists ng-tns"]>ngx-gridster>div>ngx-gridster-item:nth-child(3)>div>div:nth-child(1)>div>div:nth-child(1)>div>span>mat-icon'
    PolicyNumber = 'input[class^="mat-input-element mat-form-field-autofill-control ctrl po"]'
    InsuredName = 'input[class^="mat-input-element mat-form-field-autofill-control ctrl I"]'
    EmailID = 'input[class^="mat-input-element mat-form-field-autofill-control ctrl email"]'

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
    

}