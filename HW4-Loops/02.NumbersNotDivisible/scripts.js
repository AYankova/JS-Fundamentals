function notDivisibleBy3And7(number) {
    number *= 1;
    var arr = [];
    for (var i = 1; i <= number; i += 1) {
        if (i % 3 !== 0 || i % 7 !== 0) {
            arr.push(i);
        }
    }

    return arr;
}

function test() {
    var number = document.getElementById("number").value;

    if (!isNaN(number) && number !== '' && number >= 1) {
        document.getElementById("result").innerHTML = notDivisibleBy3And7(number).join("\n");
        console.log(notDivisibleBy3And7(number).join("\n"));
    } else {
        document.getElementById("result").innerHTML = 'Incorrect number';
        console.log('Incorrect number');
    }

    document.getElementById("result").style.background = "blanchedalmond";
}

function clearme() {
    document.getElementById("number").value = '';
    document.getElementById("result").innerHTML = '';
    window.location.reload();
}
