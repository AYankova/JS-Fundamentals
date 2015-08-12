function isPrime(number) {
    if (number < 2) return false;
    for (var i = 2; i <= Math.sqrt(number); i += 1) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function test() {
    var number = document.getElementById("number").value;

    if (!isNaN(number) && number % 1 === 0 && number !== '' && number <= 100) {
        document.getElementById("result").value = isPrime(number) ? "Prime/True" : "Not prime/False";
        console.log('Number ' + number + ' is prime? --> ' + isPrime(number));
    } else {
        document.getElementById("result").value = 'Incorrect number';
        console.log('Incorrect number');
    }

    document.getElementById("result").style.background = "skyblue";
}

function clearme() {
    document.getElementById("number").value = '';
    document.getElementById("result").value = '';
    window.location.reload();
}
