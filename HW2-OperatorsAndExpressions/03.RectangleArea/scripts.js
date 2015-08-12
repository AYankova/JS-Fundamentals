function area(width, height) {
    return width * height;
}

function test() {
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;

    if (!isNaN(width) && !isNaN(height) && width !== '' && height !== '' && width > 0 && height > 0) {
        document.getElementById("result").value = area(width, height);
        console.log('The area is: ' + area(width, height));
    } else {
        document.getElementById("result").value = 'Please enter correct parameters';
        console.log('Please enter correct parameters');
    }

    document.getElementById("result").style.background = "pink";
}

function clearme() {
    document.getElementById("width").value = '';
    document.getElementById("height").value = '';
    document.getElementById("result").value = '';
    window.location.reload();
}

document.getElementById("result").style.width = "250px";
document.getElementById("result").style.textAlign = "center";
