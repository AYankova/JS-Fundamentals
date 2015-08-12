function printN(number) {
    number *= 1;
    var arr = [];
    for (var i = 1; i <= number; i += 1) {
        arr[i - 1] = i;
    }

    return arr;
}

function test() {
    var number = document.getElementById("number").value;

    if (!isNaN(number) && number !== '' && number >= 1) {
        document.getElementById("result").innerHTML = printN(number).join("\n");
        console.log(printN(number).join("\n"));
    } else {
        document.getElementById("result").innerHTML = 'Incorrect number';
        console.log('Incorrect number');
    }

    document.getElementById("result").style.background = "yellow";
}

function clearme() {
    document.getElementById("number").value = '';
    document.getElementById("result").innerHTML = '';
    window.location.reload();
}
