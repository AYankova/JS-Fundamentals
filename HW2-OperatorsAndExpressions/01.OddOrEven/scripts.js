function oddOrEven(number) {
    if (number % 2 === 0 && number !== 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

function test() {
    var inputValue = document.getElementById("inputNum").value;

    if (!isNaN(inputValue) && inputValue % 1 === 0 && inputValue !== '') {
        console.log('Number ' + inputValue + ' is ' + oddOrEven(inputValue));
        alert('Number ' + inputValue + ' is ' + oddOrEven(inputValue));
    } else {
        console.log(' Please, enter a correct integer number!');
        alert('Please, enter a correct integer number!');
    }

    document.getElementById("inputNum").value = '';
    window.location.reload();
}

function changeColor() {
    document.getElementById("inputNum").style.background = "yellow";
}
