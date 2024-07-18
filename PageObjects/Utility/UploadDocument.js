import { waitTheButton,type,clear,click,assert, clickButton } from "../BasePage/GeneralPage"

export class Ae_Upload_Document{
    File = 'input[type=file]'
    documentClass = "hidden ng-tns-c598-8"
    MatchThis = 'div[id="caseload"]>div button:nth-child(1)>span>span'
    SaveButton = 'div[id="caseload"]>div>button:nth-of-type(1)>span:nth-of-type(1)'

    DeleteThreeDots = 'div[class^="checklists ng-tns-c"]>div:nth-of-type(2)>div>div:nth-of-type(3)>div>button>span:nth-of-type(1)'
    Download = 'div[role="menu"]>div>button:nth-of-type(2)>mat-icon'
    Delete = 'div[class^="mat-menu-content ng-tns-c"]>button:nth-of-type(4)>mat-icon'
    OkButton = '[aria-label="OK"]'
    ShowMapper = 'div[class^="mat-menu-content ng-tns-c"]>button:nth-of-type(3)>mat-icon'
    ViewButton ='div[class^="checklists ng-tns-c"]>div:nth-of-type(2)>div>div:nth-of-type(3)>button>span:nth-of-type(1)>span'


    go_to_file_upload()
    {
        cy.get(this.File).invoke("removeClass",this.documentClass)
        .selectFile("cypress/fixtures/TestData.pdf")
        //cy.get(this.matchThis,{timeout:10000}).scrollIntoView().should('be.visible')
        cy.wait(10000)
    }

    go_match_this()
    {
        cy.get(this.MatchThis).each(($button) => {
            cy.wrap($button).click().
            k +=1
          })
        
        cy.wait(10000)
    }

    go_save_button()
    {
        cy.get(this.SaveButton).click()
    }

    download_uploaded_document(){
        click(this.DeleteThreeDots)
        waitTheButton(this.Download)
        clickButton(this.Download)
        cy.wait(10000)
    }

    delete_Uploaded_document(){
        click(this.DeleteThreeDots)
        waitTheButton(this.Download)
        clickButton(this.Delete)
        waitTheButton(this.OkButton)
        clickButton(this.OkButton)
        cy.wait(5000)
    }

    go_to_show_mapper(){
        click(this.DeleteThreeDots)
        waitTheButton(this.Download)
        click(this.ShowMapper)
        waitTheButton(this.MatchThis)
        click(this.SaveButton)
        cy.wait(5000)
    }
}