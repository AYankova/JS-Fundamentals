function sortThreeNumbers(a, b, c) {
    a *= 1;
    b *= 1;
    c *= 1;

    if (a >= b) {
        if (b >= c) {
            return a + ' ' + b + ' ' + c;
        } else {
            if (c > a) {
                return c + ' ' + a + ' ' + b;
            } else {
                return a + ' ' + c + ' ' + b;
            }
        }
    } else {
        if (b >= c) {
            if (a >= c) {
                return b + ' ' + a + ' ' + c;
            } else {
                return b + ' ' + c + ' ' + a;
            }
        } else {
            return c + ' ' + b + ' ' + a;
        }
    }
}

function test() {
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var c = document.getElementById("third").value;

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a !== '' && b !== '' && c !== '') {
        document.getElementById("result").innerHTML = sortThreeNumbers(a, b, c);
        console.log('Sorted numbers ' + a + ', ' + b + ', ' + c + ' are: ' + sortThreeNumbers(a, b, c));
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
    document.getElementById("result").innerHTML = '';
    window.location.reload();
}
