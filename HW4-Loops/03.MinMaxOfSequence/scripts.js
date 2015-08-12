function minNum(arr) {
    var min = arr[0];

    for (var i = 1; i < arr.length; i += 1) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }

    return min;
}

function maxNum(arr) {
    var max = arr[0];

    for (var i = 1; i < arr.length; i += 1) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }

    return max;
}

function test() {
    var sequence = document.getElementById("sequence").value;
    var arr = sequence.split(', ').map(Number);

    if (validInput(sequence)) {
        document.getElementById("min").value = minNum(arr);
        document.getElementById("max").value = maxNum(arr);
        console.log('Min --> ' + minNum(arr));
        console.log('Max --> ' + maxNum(arr));
        document.getElementById("min").style.background = "green";
        document.getElementById("max").style.background = "red";
    } else {
        document.getElementById("result").innerHTML = 'Incorrect input';
        console.log('Incorrect input');
        document.getElementById("result").style.background = "yellow";
        document.getElementById("result").style.width = "200px";
    }
}

function clearme() {
    document.getElementById("sequence").value = '';
    document.getElementById("min").value = '';
    document.getElementById("max").value = '';
    window.location.reload();
}

function validInput(sequence) {
    if (sequence === '') {
        return false;
    }

    var arr = sequence.split(', ');

    for (var i = 0; i < arr.length; i += 1) {
        if (isNaN(arr[i])) {
            return false;
        }
    }

    return true;
}

document.getElementById("sequence").style.width = "600px";
document.getElementById("output").style.marginLeft = "200px";
document.getElementById("result").style.textAlign = "center";
document.getElementById("result").style.marginLeft = "300px";
