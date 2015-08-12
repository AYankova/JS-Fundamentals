function thirdBit(number) {
    return (number >> 3) & 1;
}

function test() {
    var inputValue = document.getElementById("inputNum").value;

    if (!isNaN(inputValue) && inputValue % 1 === 0 && inputValue !== '') {
        var binNum = parseInt(inputValue).toString(2);
        document.getElementById("bit3").value = thirdBit(inputValue);
        document.getElementById("bin").value = padLeft('0000000000000000', binNum);
        console.log('Binary representation: ' + padLeft('0000000000000000', binNum));
        console.log('Third bit of ' + inputValue + ' is: ' + thirdBit(inputValue));
    } else {
        document.getElementById("bit3").value = 'Incorrect number';
        console.log('Incorrect number');
    }

    document.getElementById("bit3").style.background = "skyblue";
    document.getElementById("bin").style.background = "yellow";
}

function clearme() {
    document.getElementById("inputNum").value = '';
    document.getElementById("bit3").value = '';
    document.getElementById("bin").value = '';
    window.location.reload();
}

function padLeft(pad, str) {
    return (pad + str).slice(-pad.length);
}

document.getElementById("bin").style.width = "120px";
