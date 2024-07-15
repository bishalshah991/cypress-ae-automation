import { waitTheButton,type,clear,click,assert,scrollpageHorizonta,hitEnter } from "../BasePage/GeneralPage"

export class Ae_PageElements{

    Re_Assign_Policy = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(1)>span:nth-of-type(1)>mat-icon'
    DiscordIcon = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(2)>span:nth-of-type(1)>mat-icon'
    Inbox = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(3)>span:nth-of-type(1)>mat-icon'
    Beneficiaries = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(4)>span:nth-of-type(1)>mat-icon'
    AddBeneFiciary = 'div[id="bene-screen-dialog-content"]>div>button>span'
    FirstName = 'input[id="FirstName"]'
    LastName = 'input[id="LastName"]'
    BusinessEntity = 'input[id="BusinessEntity"]'
    AddressLine1 = 'input[id="AddressLine1"]'
   
    AdditionalInfor = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(5)>span:nth-of-type(1)>mat-icon'
    EventLog = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(6)>span:nth-of-type(1)>mat-icon'
    LockOut = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(7)>span:nth-of-type(1)>mat-icon'
    Assign_to_me = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(8)>span:nth-of-type(1)>mat-icon'
    BackButton = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(9)>span:nth-of-type(1)>mat-icon'
    ConfirmButton = 'button[aria-label="CONFIRM"]'

    WaitToNeedsRequirementPage(){
        waitTheButton(this.DiscordIcon)
        waitTheButton(this.Re_Assign_Policy)
        waitTheButton(this.Assign_to_me)
        waitTheButton(this.BackButton)
        cy.wait(3000)
    }

    goToDiscordClaim(){
        click(this.DiscordIcon)
    }

    clickConfimButton(){
        waitTheButton(this.ConfirmButton)
        click(this.ConfirmButton)
    }

    go_to_add_beneficiary(){
        click(this.Beneficiaries)
        waitTheButton(this.AddBeneFiciary)
    }
}