function allocateAndInitialize() {
    var numbers = [],
        len,
        i;

    for (i = 0, len = 20; i < len; i += 1) {
        numbers[i] = i * 5;
    }

    console.log(numbers.join(', '));

    return numbers.join(', ');
}

function test() {
    document.getElementById("result").innerHTML = allocateAndInitialize();
    document.getElementById("result").style.background = "yellow";
    document.getElementById("result").style.width = "500px";
}
