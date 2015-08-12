function thirdDigit7(number) {
    return (Math.floor(Math.abs(number / 100)) % 10) === 7;
}

function test() {
    var inputValue = document.getElementById("inputNum").value;

    if (!isNaN(inputValue) && inputValue % 1 === 0 && inputValue !== '') {
        console.log('Third digit of ' + inputValue + ' is 7 from right to left? --> ' + thirdDigit7(inputValue));
        document.getElementById("result").value = thirdDigit7(inputValue);
    } else {
        console.log(' Please, enter a correct integer number!');
        document.getElementById("result").value = 'Incorrect number';
    }

    document.getElementById("result").style.background = "pink";

}

function clearme() {
    document.getElementById("inputNum").value = '';
    document.getElementById("result").value = '';
    window.location.reload();
}

function changeColor() {
    document.getElementById("inputNum").style.background = "yellow";
}
