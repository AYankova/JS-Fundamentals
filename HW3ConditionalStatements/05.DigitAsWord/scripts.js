function digitAsWord(digit) {
    var result;
    switch (digit) {
        case '0':
            result = "Zero";
            break;
        case '1':
            result = "One";
            break;
        case '2':
            result = "Two";
            break;
        case '3':
            result = "Three";
            break;
        case '4':
            result = "Four";
            break;
        case '5':
            result = "Five";
            break;
        case '6':
            result = "Six";
            break;
        case '7':
            result = "Seven";
            break;
        case '8':
            result = "Eight";
            break;
        case '9':
            result = "Nine";
            break;
        default:
            result = "Not a digit";
            break;
    }

    return result;
}

function test() {
    var digit = document.getElementById("digit").value;

    document.getElementById("result").innerHTML = digitAsWord(digit);
    console.log(digit + ' as a word is: ' + digitAsWord(digit));

    document.getElementById("result").style.background = "yellow";
    document.getElementById("result").style.width = "250px";
    document.getElementById("result").style.marginLeft = "300px";
    document.getElementById("result").style.textAlign = "center";
}

function clearme() {
    document.getElementById("digit").value = '';
    document.getElementById("result").innerHTML = '';
    window.location.reload();
}
