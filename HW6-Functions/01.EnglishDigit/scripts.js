function lastDigitAsAWord(number) {
    var digit = (number | 0) % 10;

    switch (digit) {
        case 0:
            return 'zero';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        default:
            return 'invalid number';
    }
}

function test() {
    var number = document.getElementById("number").value;

    if (!isNaN(number) && number !== "" && (!(number % 1))) {
        document.getElementById("result").innerHTML = lastDigitAsAWord(number);
        console.log(lastDigitAsAWord(number));
    } else {
        document.getElementById("result").innerHTML = 'Incorrect input';
        console.log('Incorrect input');
    }

    document.getElementById("result").style.background = "yellow";
    document.getElementById("result").style.width = "150px";
    document.getElementById("result").style.textAlign = "center";
}

function clearme() {
    document.getElementById("number").value = '';
    document.getElementById("result").innerHTML = '';
    window.location.reload();
}
