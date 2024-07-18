import { waitTheButton,type,clear,click,clickButton,scrollpageHorizontal,hitEnter } from "../BasePage/GeneralPage"

export class Ae_Fh_Research{
    TxReconAuditFow = '.TX > .mat-ripple > .nav-link-title'
    FhResearch = ':nth-child(5) > .groupBorder > .group-items > .nav-item > .FH > .mat-ripple > .nav-link-title'
    SearchBox = 'input[placeholder="Search within the following claims..."]'
    InsuredName = 'mat-table[id="claimQueueList"]>mat-row>mat-cell:nth-of-type(2)>div'
    ThreeDots = 'mat-table[id="claimQueueList"]>mat-row>mat-cell:nth-of-type(11)>div>button>span:nth-of-type(1)'
    CheckList = 'div[class^="mat-menu-content ng-tns-c"]>button:nth-of-type(3)>span'

    scroll_the_tx_recon_audit_flow(){
        scrollpageHorizontal(this.TxReconAuditFow)
        click(this.FhResearch)
        waitTheButton(this.SearchBox)
    }

    search_the_policy(text){
        hitEnter(this.SearchBox,text)
        waitTheButton(this.InsuredName)
        cy.wait(3000)
    }

    go_to_checklist_page(){
        click(this.ThreeDots)
        waitTheButton(this.CheckList)
        click(this.CheckList)
    }



}