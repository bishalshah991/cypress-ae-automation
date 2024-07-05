import { waitTheButton,type,clear,click,hitEnter,scrollpageHorizontal } from "../BasePage/GeneralPage"

export class Ae_needs_reuirement{

    NeedsRequirement = 'div[id^="main-navigation"]>fuse-nav-vertical-group:nth-child(4)>div>div:nth-child(2)>fuse-nav-vertical-item:nth-child(1)>div>a>span:nth-of-type(1)'
    SearchBox = 'input[placeholder^="Search within the following"]'
    InsuredName = 'mat-row[role="row"]>mat-cell:nth-child(2)>div'
    FuneralHome = 'mat-header-row[role="row"]>mat-header-cell:nth-child(8)>div'
    ThreeDots = 'mat-row[role="row"]>mat-cell:nth-child(11)>div>button>span:nth-child(1)'
    Details = 'div[role="menu"]>div>button:nth-child(1)>span'
    ViewClaim = 'div[role="menu"]>div>button:nth-child(2)>span'
    Checklist = 'div[role="menu"]>div>button:nth-child(3)>span'
    

    gotoNeedsRequirement(){
        click(this.NeedsRequirement)
        waitTheButton(this.SearchBox)
        cy.wait(2000)
    }

    enterThePolicyNumber(text){
        hitEnter(this.SearchBox,text)
        waitTheButton(this.InsuredName)
        scrollpageHorizontal(this.FuneralHome)
        cy.wait(2000)
    }

    
    enterThePolicyNumberFromEnvironment(){
        const policy = Cypress.env('POLICY')
        hitEnter(this.SearchBox,policy)
        waitTheButton(this.InsuredName)
        scrollpageHorizontal(this.FuneralHome)
        cy.wait(2000)
    }

    clickThreeDots(){
        click(this.ThreeDots)
    }

    goToDetailPage(){
        click(this.ThreeDots)
        waitTheButton(this.Details)
        click(this.Details)
    }

    goToViewClaim(){
        click(this.ThreeDots)
        waitTheButton(this.ViewClaim)
        click(this.ViewClaim)
    }

    goToChecklist(){
        click(this.ThreeDots)
        waitTheButton(this.Checklist)
        click(this.Checklist)
    }

    
}