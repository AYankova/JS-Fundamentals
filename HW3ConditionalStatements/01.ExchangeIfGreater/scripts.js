function exchangeTwoNumbers(a, b) {
    if (a > b) {
        return b + ' ' + a;
    }

    return a + ' ' + b;
}

function test() {
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;

    if (!isNaN(a) && !isNaN(b) && a !== '' && b !== '') {
        document.getElementById("result").innerHTML = exchangeTwoNumbers(a, b);
        console.log(exchangeTwoNumbers(a, b));
    } else {
        document.getElementById("result").innerHTML = 'Please enter numbers';
        console.log('Please enter numbers');
    }

    document.getElementById("result").style.background = "skyblue";
    document.getElementById("result").style.width = "150px";
    document.getElementById("result").style.marginLeft = "300px";
    document.getElementById("result").style.textAlign = "center";
}

function clearme() {
    document.getElementById("first").value = '';
    document.getElementById("second").value = '';
    document.getElementById("result").innerHTML = '';
    window.location.reload();
}
