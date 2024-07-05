import { waitTheButton,type,clear,click,hitEnter,scrollpageHorizontal } from "../BasePage/GeneralPage"

export class Ae_update_Claim{

    NeedsRequirement = 'div[id^="main-navigation"]>fuse-nav-vertical-group:nth-child(4)>div>div:nth-child(2)>fuse-nav-vertical-item:nth-child(1)>div>a>span:nth-of-type(1)'
    SearchBox = 'input[placeholder^="Search within the following"]'
    InsuredName = 'mat-row[role="row"]>mat-cell:nth-child(2)>div'
    FuneralHome = 'mat-header-row[role="row"]>mat-header-cell:nth-child(8)>div'
    ThreeDots = 'mat-row[role="row"]>mat-cell:nth-child(11)>div>button>span:nth-child(1)'
    Details = 'div[role="menu"]>div>button:nth-child(1)>span'
    ViewClaim = 'div[role="menu"]>div>button:nth-child(2)>span'
    Checklist = 'div[role="menu"]>div>button:nth-child(3)>span'

    Scroll_to_Update_Claim_Intake(){
        scrollpageHorizontal
    }
    

    

    
}