function numberAsWord(number) {
    number *= 1;
    var hundreds = Math.floor(number / 100),
        tens = Math.floor(number / 10) % 10,
        digits = number % 10,
        special = 10 + digits,
        specialText = "",
        hundredsText = "",
        tensText = "",
        digitsText,
        result;

    switch (special) {
        case 11:
            specialText = "eleven";
            break;
        case 12:
            specialText = "twelve";
            break;
        case 13:
            specialText = "thirteen";
            break;
        case 14:
            specialText = "fourteen";
            break;
        case 15:
            specialText = "fifteen";
            break;
        case 16:
            specialText = "sixteen";
            break;
        case 17:
            specialText = "seventeen";
            break;
        case 18:
            specialText = "eighteen";
            break;
        case 19:
            specialText = "nineteen";
            break;
    }

    switch (hundreds) {
        case 1:
            hundredsText = 'one hundred';
            break;
        case 2:
            hundredsText = 'two hundred';
            break;
        case 3:
            hundredsText = 'three hundred';
            break;
        case 4:
            hundredsText = 'four hundred';
            break;
        case 5:
            hundredsText = 'five hundred';
            break;
        case 6:
            hundredsText = 'six hundred';
            break;
        case 7:
            hundredsText = 'seven hundred';
            break;
        case 8:
            hundredsText = 'eight hundred';
            break;
        case 9:
            hundredsText = 'nine hundred';
            break;
        case 0:
            hundredsText = '';
            break;
    }

    if (number % 100 !== 0 && number >= 100) {
        hundredsText = hundredsText + ' and ';
    }

    if (tens === 1 && digits > 0) {
        result = hundredsText + specialText;
        hundredsText = '';
        tensText = '';
        return result;
    }

    switch (tens) {
        case 1:
            tensText = 'ten';
            break;
        case 2:
            tensText = 'twenty';
            break;
        case 3:
            tensText = 'thirty';
            break;
        case 4:
            tensText = 'forty';
            break;
        case 5:
            tensText = 'fifty';
            break;
        case 6:
            tensText = 'sixty';
            break;
        case 7:
            tensText = 'seventy';
            break;
        case 8:
            tensText = 'eighty';
            break;
        case 9:
            tensText = 'ninety';
            break;
        case 0:
            tensText = '';
            break;
    }

    switch (digits) {
        case 1:
            digitsText = 'one';
            break;
        case 2:
            digitsText = 'two';
            break;
        case 3:
            digitsText = 'three';
            break;
        case 4:
            digitsText = 'four';
            break;
        case 5:
            digitsText = 'five';
            break;
        case 6:
            digitsText = 'six';
            break;
        case 7:
            digitsText = 'seven';
            break;
        case 8:
            digitsText = 'eight';
            break;
        case 9:
            digitsText = 'nine';
            break;
        default:
            digitsText = '';
            break;
    }

    if (number === 0) {
        result = 'zero';
        hundredsText = '';
        tensText = '';
        digitsText = '';
        return result;
    }
    if (number <= 10 || number >= 20) {
        result = hundredsText + tensText + ' ' + digitsText;
        return result;
    }
}

function test() {
    var number = document.getElementById("number").value;
    number *= 1;

    //I've put number != '' on purpose;  number !== '' does not give me the desired result here
    if (!isNaN(number) && number != '' && number >= 0 && number <= 999 && number % 1 === 0) {
        document.getElementById("result").innerHTML = numberAsWord(number);
        console.log(number + ' as a word is: ' + numberAsWord(number));
    } else {
        document.getElementById("result").innerHTML = 'Incorrect number';
        console.log('Incorrect number');
    }

    document.getElementById("result").style.background = "yellow";
    document.getElementById("result").style.width = "250px";
    document.getElementById("result").style.marginLeft = "300px";
    document.getElementById("result").style.textAlign = "center";
}

function clearme() {
    document.getElementById("number").value = '';
    document.getElementById("result").innerHTML = '';
    window.location.reload();
}
