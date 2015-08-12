function biggestOfFive(a, b, c, d, e) {
    a *= 1;
    b *= 1;
    c *= 1;
    d *= 1;
    e *= 1;
    var arr = [a, b, c, d, e],
        max = a;

    for (var i = 1; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function test() {
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var c = document.getElementById("third").value;
    var d = document.getElementById("fourth").value;
    var e = document.getElementById("fifth").value;

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d) && !isNaN(e) &&
        a !== '' && b !== '' && c !== '' && d !== '' && e !== '') {
        document.getElementById("result").innerHTML = biggestOfFive(a, b, c, d, e);
        console.log('The biggest of ' + a + ', ' + b + ', ' + c + ', ' + d + ', ' + e + ' is: ' + biggestOfFive(a, b, c, d, e));
    } else {
        document.getElementById("result").innerHTML = 'Please enter valid numbers';
        console.log('Please enter valid numbers');
    }

    document.getElementById("result").style.background = "yellow";
    document.getElementById("result").style.width = "250px";
    document.getElementById("result").style.marginLeft = "300px";
    document.getElementById("result").style.textAlign = "center";
}

function clearme() {
    document.getElementById("first").value = '';
    document.getElementById("second").value = '';
    document.getElementById("third").value = '';
    document.getElementById("fourth").value = '';
    document.getElementById("fifth").value = '';
    document.getElementById("result").innerHTML = '';
    window.location.reload();
}
