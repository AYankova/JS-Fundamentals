function firstLargerThanNeighbours(arr) {
    var i,
        len;

    for (i = 0, len = arr.length; i < len; i += 1) {
        if (largerThanNeighbours(arr, i))
            return i;
    }

    return -1 + ' (Not found or have only one neighbour)';
}

function largerThanNeighbours(arr, index) {
    if (arr[index] > arr[index - 1] && arr[index] > arr[index + 1]) {
        return true;
    }

    return false;
}

function test() {
    var sequence = document.getElementById("input").value;

    if (validateInput(sequence)) {
        var arr = sequence.split(', ').map(Number);
        document.getElementById("result").innerHTML = 'Index of first number larger than its neighbours is ' + firstLargerThanNeighbours(arr);
        console.log('Index of first number larger than its neighbours is ' + firstLargerThanNeighbours(arr));
    } else {
        document.getElementById("result").innerHTML = 'Incorrect input';
        console.log('Incorrect input');
    }

    document.getElementById("result").style.background = "yellow";
}

function clearme() {
    document.getElementById("input").value = '';
    document.getElementById("result").innerHTML = '';
    window.location.reload();
}

function validateInput(input) {
    var arr = input.split(', ').map(Number),
        i,
        len;

    if (input === '') {
        return false;
    }
    for (i = 0, len = arr.length; i < len; i += 1) {
        if (isNaN(arr[i])) {
            return false;
        }
    }

    return true;
}

document.getElementById("input").style.width = '500px';
