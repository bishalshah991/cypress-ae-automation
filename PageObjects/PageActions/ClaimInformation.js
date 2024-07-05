
import { waitTheButton,type,click } from "../BasePage/GeneralPage";
import { generateRandomText,generatenRandomNumber } from "../BasePage/GeneralPage";

export class Ae_Claim_information{
    ClaimType = 'mat-select[id="claim_type"]>div>div>span'
    ClaimTypeValue = 'div[role="listbox"]>mat-option:nth-child(4)>span'
    SpokeTo = 'input[id="spoke_to"]'
    Relationship = 'div[class^="ng-trigger ng-trigger"]>form>div:nth-child(3)>fuse-input-combo-control>mat-form-field>div>div:nth-child(1)>div>mat-select>div>div:nth-child(1)>span>span'
    RelationshipValue = 'div[role="listbox"]>mat-option:nth-of-type(4)>span'
    PhoneFax = 'input[id="phone_fax"]'
    CheckBox = 'span[class="mat-checkbox-inner-container"]'
    AcceptButton = 'div[class="ng-trigger ng-trigger-slideInLeft ps ng-star-inserted"]>div:nth-of-type(1)>button:first-of-type>span:first-of-type'
    SubmitClaim = 'div[class^="policyholder-detail-form"]>mat-sidenav>div>fuse-quote-screen-sidenav>div>div>div:nth-of-type(2)>fuse-claim-intake>mat-horizontal-stepper>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(5)>button:nth-of-type(1)'
    
    
    enter_claim_type(){
        waitTheButton(this.ClaimType)
        click(this.ClaimType)
        click(this.ClaimTypeValue)
    }

    enter_spoke_to(test){
        click(this.SpokeTo)
        type(this.SpokeTo,test)
    }

    enter_relationship(){
        click(this.Relationship)
        click(this.RelationshipValue)
    }

    enter_phoneNumber(phone){
        type(this.PhoneFax,generatenRandomNumber())

    }

    enter_accept_button(){
        click(this.CheckBox)
        click(this.AcceptButton)
        waitTheButton(this.SubmitClaim)
        click(this.SubmitClaim)
        cy.wait(2000)
    }

}