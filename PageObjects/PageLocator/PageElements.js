import { waitTheButton,type,clear,click,assert,scrollpageHorizonta,hitEnter } from "../BasePage/GeneralPage"

export class Ae_PageElements{

    Re_Assign_Policy = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(1)>span:nth-of-type(1)>mat-icon'
    DiscordIcon = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(2)>span:nth-of-type(1)>mat-icon'
    Inbox = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(3)>span:nth-of-type(1)>mat-icon'
    InboxLavel = 'div[class^="content ng-tns-c"]>div:nth-of-type(1)>div>div:nth-of-type(1)'
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
    UnAssigned = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(9)>span:nth-of-type(1)>mat-icon'

    ClaimTag = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(10)>span:nth-of-type(1)>mat-icon'
    SelectClaimTag = 'input[class^="mat-autocomplete-trigger mat-chip-input mat-input"]'
    PickClaimTag = 'div[class^="mat-autocomplete-pane"]>mat-option'
    TagReason = 'div[class^="fr-element fr-view"]'
    ClaimConfirmButton = 'div[class^="mat-dialog-actions p"]>button:nth-of-type(1)'

    TxReconTab = '.TX > .mat-ripple > .nav-link-title'
    TxSearchBox = '.search > .mat-tooltip-trigger'
    WaitTxPolicy = 'mat-table[id^="claimQueueList"]>mat-row>mat-cell:nth-of-type(2)>div'

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

    go_to_inbox(){
        click(this.Inbox)
        cy.wait(3000)
        click(this.InboxLavel)
        cy.wait(5000)
    }

    go_to_assign_to_me(){
        click(this.Assign_to_me)
        waitTheButton(this.ConfirmButton)
        click(this.ConfirmButton)
    }

    go_to_unassigned(){
        click(this.UnAssigned)
        waitTheButton(this.ConfirmButton)
        click(this.ConfirmButton)
    }

    go_to_claim_tag(text){
        click(this.ClaimTag)
        waitTheButton(this.SelectClaimTag)
        type(this.SelectClaimTag,text)
        waitTheButton(this.PickClaimTag)
        click(this.PickClaimTag)
    }

    enter_tag_reason(text){
        type(this.TagReason,text)
        click(this.ClaimConfirmButton)
    }

    go_to_Tx_recon(text){
        click(this.TxReconTab)
        waitTheButton(this.TxSearchBox)
        hitEnter(this.TxSearchBox,text)
        waitTheButton(this.WaitTxPolicy)
    }
}