function sign(a, b, c) {
    var arr = [a, b, c],
        negative = 0;
    for (var i = 0; i < arr.length; i += 1) {
        if (arr[i] < 0) {
            negative += 1;
        }
    }

    if (a * 1 === 0 || b * 1 === 0 || c * 1 === 0) {
        return '0';
    } else if (negative % 2 === 0) {
        return '+';
    } else {
        return '-';
    }
}

function test() {
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var c = document.getElementById("third").value;

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a !== '' && b !== '' && c !== '') {
        document.getElementById("result").innerHTML = sign(a, b, c);
        console.log('Sign is: ' + sign(a, b, c));
    } else {
        document.getElementById("result").innerHTML = 'Please enter valid numbers';
        console.log('Please enter valid numbers');
    }

    document.getElementById("result").style.background = "yellow";
    document.getElementById("result").style.width = "150px";
    document.getElementById("result").style.marginLeft = "300px";
    document.getElementById("result").style.textAlign = "center";
}

function clearme() {
    document.getElementById("first").value = '';
    document.getElementById("second").value = '';
    document.getElementById("third").value = '';
    document.getElementById("result").innerHTML = '';
    window.location.reload();
}
