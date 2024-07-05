import { waitTheButton,type,clear,enterKeyboard,click,assert, enterusername, enterpassword } from "../BasePage/GeneralPage"

export class Ae_handling_calender{

    Calendar = 'mat-sidenav[position="end"]>div>fuse-quote-screen-sidenav>div>div>div:nth-child(2)>form>div:nth-child(1)>fuse-input-date-control>mat-datepicker-toggle>button'
    CalendarBack = 'div[class="mat-calendar-controls"]>button:nth-child(3)'
    CalendarDate = 'div[class="mat-calendar-content"]>mat-month-view>table>tbody>tr:nth-child(3)>td:nth-child(4)'

    enter_calendar_Date(){
        cy.get(this.Calendar).click()
        cy.get(this.CalendarBack).click()
        cy.get(this.CalendarDate).click()
    }


    

}