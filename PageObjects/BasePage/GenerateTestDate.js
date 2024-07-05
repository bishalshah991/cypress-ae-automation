
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

export function generatenRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 10000000000);
    var randomNumberString = randomNumber.toString();

    while (randomNumberString.length < 10) {
        randomNumberString = '0' + randomNumberString;
      }

      return randomNumberString;
}

export function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


