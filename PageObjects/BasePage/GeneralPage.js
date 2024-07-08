
export function waitTheButton(locator){
    return cy.get(locator,{timeout:300000}).should('be.visible');
}
export function clear(locator){
    return cy.get(locator).clear()
}

export function enterusername(locator){
    const email = Cypress.env('EMAIL');
      if (typeof email !== 'string' && typeof email !== 'number') {
        throw new Error(`Cypress.env('EMAIL') is not a string or number. It is: ${typeof text}`);
      }
      return cy.get(locator).type(email);

}

export function enterpassword(locator){
    const password = Cypress.env('PASSWORD');
      if (typeof password !== 'string' && typeof password !== 'number') {
        throw new Error(`Cypress.env('PASSWORD') is not a string or number. It is: ${typeof text}`);
      }
      return cy.get(locator).type(password);

}

export function type(locator,text){
    return cy.get(locator).type(text)
}

export function click(locator){
    return cy.get(locator).click()
}

export function hitEnter(locator,text){
    return cy.get(locator).type(text).type('{enter}');
}

export function assert(locator,expText){
    cy.get(locator).then(($element)=>{
        const actualText = $element.text();
        const expectedText = expText;
        expect(actualText).to.equal(expectedText);
    })
}

export function scrollpageHorizontal(locator){
    return cy.get(locator).scrollIntoView().should('be.visible')
}


export function generateRandomText(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function generatenRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 10000000000);
    var randomNumberString = randomNumber.toString();

    while (randomNumberString.length < 10) {
        randomNumberString = '0' + randomNumberString;
      }

      return randomNumberString;

}

export function usebackspace(locator){
    cy.get(locator).type('{backspace}')

}