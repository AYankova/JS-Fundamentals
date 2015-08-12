function divisibleBy7And5(number) {
    if (number % 5 === 0 && number % 7 === 0) {
        return 'Divisible by 7 and 5';
    } else {
        return 'Not divisible by 7 and 5';
    }
}

function test() {
    var inputValue = document.getElementById("inputNum").value;

    if (!isNaN(inputValue) && inputValue % 1 === 0 && inputValue !== '') {
        console.log('Number ' + inputValue + ' is ' + divisibleBy7And5(inputValue));
        alert('Number ' + inputValue + ' is ' + divisibleBy7And5(inputValue));
    } else {
        console.log('Please, enter a correct integer number!');
        alert('Please, enter a correct integer number!');
    }

    document.getElementById("inputNum").value = '';
    window.location.reload();
}

function changeColor() {
    document.getElementById("inputNum").style.background = "blanchedalmond";
}
