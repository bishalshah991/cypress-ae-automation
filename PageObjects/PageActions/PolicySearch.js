
import { waitTheButton,type,clear,click,assert } from "../BasePage/GeneralPage"

export class Ae_Policy_Search_Page{
    PolicySearchTab = 'div[id^="main-navigation"]>fuse-nav-vertical-group:nth-child(2)>div>div:nth-child(2)>fuse-nav-vertical-item>div'
    PolicySearchBox = 'input[id^="searchInput"]'
    PolicyList = 'mat-row[role="row"]>mat-cell:nth-child(2)>div'
    InsuresName = 'mat-row[role="row"]>mat-cell:nth-child(2)>div'
    ThreeDots = 'mat-row[role="row"]>mat-cell:nth-child(11)>div>button>span:nth-child(1)'
    BeginClaim = 'div[role="menu"]>div>button:nth-child(1)>span'

    gotoPolicySearchTab(){
        click(this.PolicySearchTab)
        waitTheButton(this.PolicySearchBox)
        cy.wait(2000)
    }

    enterThePolicyFromEnvironment(){
        const policy = Cypress.env('POLICY')
        type(this.PolicySearchBox,policy)
        waitTheButton(this.PolicyList)
    }

    enterthePolicyFromLocal(policyNumber){
        type(this.PolicySearchBox,policyNumber)
        waitTheButton(this.PolicyList)
    }

    gotoThreeDots(){
        click(this.ThreeDots)
        waitTheButton(this.BeginClaim)
        click(this.BeginClaim)
    }

    

}