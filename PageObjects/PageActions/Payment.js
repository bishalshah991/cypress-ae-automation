import { waitTheButton,type,clear,click,clickButton,scrollpageHorizontal,hitEnter } from "../BasePage/GeneralPage"

export class Ae_Payment{
    Payment ='div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(4)>span>mat-icon'
    Approve = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(7)>span>mat-icon'
    ConfirmButton = 'button[aria-label="CONFIRM"]'
    TerminatePay = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(6)>span>mat-icon'
    Remarks = 'div[id="caseload"]>fuse-action-panel>div>div>div:nth-of-type(2)>button:nth-of-type(5)>span>mat-icon'
    PickTypeReason = 'input[data-placeholder="Pick or type a reason"]'
    PickOption = 'div[class^="cdk-overlay-connected-position"]>div>div>mat-option:nth-of-type(1)'
    SelectCategory = 'div[id="forms"]>div>form>div:nth-of-type(2)>mat-form-field>div>div>div:nth-of-type(3)>mat-select'
    Procedural = 'div[class^="cdk-overlay-pane"]>div>div>mat-option:nth-of-type(3)>span'
    EnterNote = 'span[class="fr-placeholder"]'
    RemarksConfirm = 'button[class^="mat-focus-indicator confirm mr"]'

    go_to_payment(){
        click(this.Payment)
        waitTheButton(this.Approve)
        click(this.Approve)
        click(this.ConfirmButton)
        waitTheButton(this.TerminatePay)
    }

    go_to_terminate_tab(){
        click(this.TerminatePay)
        waitTheButton(this.ConfirmButton)
        click(this.ConfirmButton)
        waitTheButton(this.Remarks)
    }

    go_to_remarks(){
        click(this.Remarks)
        waitTheButton(this.PickTypeReason)
        click(this.PickTypeReason)
        waitTheButton(this.PickOption)
        click(this.PickOption)
    }

    go_to_select_category(text){
        click(this.SelectCategory)
        waitTheButton(this.Procedural)
        click(this.Procedural)
        type(this.EnterNote,text)
        scrollpageHorizontal(this.RemarksConfirm)
        click(this.RemarksConfirm)
    }
}