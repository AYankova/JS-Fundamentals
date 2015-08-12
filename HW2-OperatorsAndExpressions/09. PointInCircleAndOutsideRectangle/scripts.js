function pointInCircleOutsideRect(x, y) {
    var withinCircle = ((x - 1) * (x - 1) + (y - 1) * (y - 1)) <= 3 * 3,
        outsideRect = ((x < -1) || (x > 5) || (y > 1) || (y < -1));
    return withinCircle && outsideRect;
}

function test() {
    var x = document.getElementById("xCoord").value;
    var y = document.getElementById("yCoord").value;

    if (!isNaN(x) && !isNaN(y) && x !== '' && y !== '') {
        document.getElementById("result").value = pointInCircleOutsideRect(x, y) ? "Yes" : "No";
        console.log('The point (' + x + ',' + y + ') is in the circle and outside the rectangle? --> ' + (pointInCircleOutsideRect(x, y) ? 'Yes' : 'No'));
    } else {
        document.getElementById("result").value = 'Incorrect parameters';
        console.log('Please enter correct parameters');
    }

    document.getElementById("result").style.background = "skyblue";
}

function clearme() {
    document.getElementById("xCoord").value = '';
    document.getElementById("yCoord").value = '';
    document.getElementById("result").value = '';
    window.location.reload();
}
