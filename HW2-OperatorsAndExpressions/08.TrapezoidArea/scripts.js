function area(width, height, altitude) {
    return ((width * 1 + height * 1) / 2) * altitude;
}

function test() {
    var a = document.getElementById("sideA").value;
    var b = document.getElementById("sideB").value;
    var h = document.getElementById("altitude").value;

    if (!isNaN(a) && !isNaN(b) && !isNaN(h) && a !== '' && b !== '' && h !== '' && a > 0 && b > 0 && h > 0) {
        if (area(a, b, h) % 1 !== 0) {
            document.getElementById("result").value = parseFloat(area(a, b, h).toFixed(7));
            console.log('The area is: ' + parseFloat(area(a, b, h).toFixed(7)));
        } else {
            document.getElementById("result").value = area(a, b, h);
            console.log('The area is: ' + area(a, b, h));
        }
    } else {
        document.getElementById("result").value = 'Incorrect parameters';
        console.log('Incorrect parameters');
    }

    document.getElementById("result").style.background = "pink";
}

function clearme() {
    document.getElementById("sideA").value = '';
    document.getElementById("sideB").value = '';
    document.getElementById("altitude").value = '';
    document.getElementById("result").value = '';
    window.location.reload();
}
