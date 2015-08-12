function quadraticEquation(a, b, c) {

    var D = b * b - 4 * a * c,
        root1,
        root2,
        root;
    if (D > 0) {
        root1 = (-b - Math.sqrt(D)) / (2 * a);
        root2 = (-b + Math.sqrt(D)) / (2 * a);
        return 'x1=' + root1 + '; ' + 'x2=' + root2;
    } else {
        if (D === 0) {
            root = -b / (2 * a);
            return 'x1=x2=' + root;
        }
    }

    return 'no real roots';
}

function test() {
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var c = document.getElementById("third").value;

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a !== '' && b !== '' && c !== '') {
        document.getElementById("result").innerHTML = quadraticEquation(a, b, c);
        console.log('Roots are: ' + quadraticEquation(a, b, c));
    } else {
        document.getElementById("result").innerHTML = 'Please enter valid coefficients';
        console.log('Please enter valid coefficients');
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
