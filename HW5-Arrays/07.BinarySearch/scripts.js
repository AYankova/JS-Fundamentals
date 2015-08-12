function binarySearch(arr, number, start, end) {
    var middle;

    sortArray(arr);

    if (arr[start] > number || arr[end] < number || start > end) {
        return -1 + ' (Not found)';
    }

    middle = ((start + end) / 2) | 0;

    if (arr[middle] === number) {
        return middle;
    } else {
        if (arr[middle] > number) {
            return binarySearch(arr, number, start, middle - 1);
        } else {
            return binarySearch(arr, number, middle + 1, end);
        }
    }
}

function sortArray(arr) {
    arr.sort(function(a, b) {
        return a - b;
    });
}

function test() {
    var sequence = document.getElementById("sequence").value,
        numbers = sequence.split(', ').map(Number),
        number = document.getElementById("target").value;

    sortArray(numbers);

    if (validateInput(numbers) && sequence !== '' && number !== '' && (!isNaN(number))) {
        number *= 1;
        document.getElementById("result").innerHTML = 'Index is: ' + binarySearch(numbers, number, 0, numbers.length - 1);
        console.log('Sorted array: ' + numbers.join(', '));
        console.log('Index of ' + number + ' is -> ' + binarySearch(numbers, number, 0, numbers.length - 1));
    } else {
        document.getElementById("result").innerHTML = 'Incorrect input';
        console.log('Incorrect input');
    }

    document.getElementById("result").style.background = "yellow";
}

function clearme() {
    document.getElementById("sequence").value = '';
    document.getElementById("target").value = '';
    document.getElementById("result").innerHTML = '';
    window.location.reload();
}

function validateInput(input) {
    var i,
        len = input.length;

    if (len === 0) {
        return false;
    }
    for (i = 0; i < len; i += 1) {
        if (isNaN(input[i])) {
            return false;
        }
    }

    return true;
}

document.getElementById("sequence").style.width = '400px';
