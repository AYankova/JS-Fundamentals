function selectionSort(sequence) {
    var arr = sequence.split(', ').map(Number),
        i,
        len,
        temp,
        j;

    for (i = 0, len = arr.length; i < len; i += 1) {
        for (j = i + 1; j < len; j += 1) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr.join(', ');
}

function test() {
    var numbers = document.getElementById("sequence").value;

    if (validateInput(numbers)) {
        document.getElementById("result").innerHTML = 'Sorted array: ' + selectionSort(numbers);
        console.log('Sorted array: ' + selectionSort(numbers));
    } else {
        document.getElementById("result").innerHTML = 'Incorrect input';
        console.log('Incorrect input');
    }

    document.getElementById("result").style.background = "yellow";
}

function clearme() {
    document.getElementById("sequence").value = '';
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

document.getElementById("sequence").style.width = '500px';
