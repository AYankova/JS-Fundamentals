function largerThanNeighbours(arr, index) {
    if (arr[index] > arr[index - 1] && arr[index] > arr[index + 1]) {
        return true;
    }

    return false;
}

function test() {
    var sequence = document.getElementById("input").value,
        index = document.getElementById("number").value,
        result;

    if (validateInput(sequence) && index !== '' && !isNaN(index) && (!(index % 1))) {
        var arr = sequence.split(', ').map(Number);
        index *= 1;
        if (index >= 0 && index < arr.length) {
            if (index > 0 && index < arr.length - 1) {
                result = largerThanNeighbours(arr, index);
            } else {
                result = 'Only one neighbour';
            }
        } else {
            result = 'Index must be greater than 0 and less than ' + arr.length;
        }
        document.getElementById("result").innerHTML = 'Is number at index ' + index + ' larger than its neighbours? --> ' + result;
        console.log('Is number at index ' + index + ' larger than its neighbours? --> ' + result);
    } else {
        document.getElementById("result").innerHTML = 'Incorrect input';
        console.log('Incorrect input');
    }

    document.getElementById("result").style.background = "yellow";
}

function clearme() {
    document.getElementById("input").value = '';
    document.getElementById("number").value = '';
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
