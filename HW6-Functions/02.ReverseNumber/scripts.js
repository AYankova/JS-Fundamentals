function reverseNumber(number) {
    var result = [];

    if (number < 0) {
        result.push('-');
        number = Math.abs(number);
    }

    number = reverseStr(number.toString());
    Array.prototype.push.call(result, number);

    return +(result.join(''));
}

function reverseStr(s) {
    return s.split('').reverse().join('');
}

function test() {
    var number = document.getElementById("number").value;

    if (!isNaN(number) && number !== "") {
        document.getElementById("result").innerHTML = reverseNumber(number);
        console.log(reverseNumber(number));
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
