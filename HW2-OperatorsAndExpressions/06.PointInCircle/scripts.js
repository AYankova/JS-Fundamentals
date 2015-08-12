function insideACircle(x, y) {
    return (x * x + y * y) <= 5 * 5;
}

function test() {
    var xCoord = document.getElementById("xCoord").value;
    var yCoord = document.getElementById("yCoord").value;

    if (!isNaN(xCoord) && !isNaN(yCoord) && xCoord !== '' && yCoord !== '') {
        document.getElementById("result").value = insideACircle(xCoord, yCoord) ? "Inside/True" : "Outside/False";
        console.log('A point with coordinates (' + xCoord + ',' + yCoord + ')' + ' is inside the circle?: ' + insideACircle(xCoord, yCoord));
    } else {
        document.getElementById("result").value = 'Incorrect parameters';
        console.log('Incorrect parameters');
    }

    document.getElementById("result").style.background = "skyblue";
}

function clearme() {
    document.getElementById("xCoord").value = '';
    document.getElementById("yCoord").value = '';
    document.getElementById("result").value = '';
    window.location.reload();
}
