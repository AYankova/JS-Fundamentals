function biggestOfThree(a, b, c) {
    a *= 1;
    b *= 1;
    c *= 1;

    if (a > b) {
        if (a > c) {
            return a;
        }
        return c;
    }
    if (c > b) {
        return c;
    }

    return b;
}

function test() {
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var c = document.getElementById("third").value;

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a !== '' && b !== '' && c !== '') {
        document.getElementById("result").innerHTML = biggestOfThree(a, b, c);
        console.log('The biggest of numbers ' + a + ', ' + b + ', ' + c + ' is: ' + biggestOfThree(a, b, c));
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
