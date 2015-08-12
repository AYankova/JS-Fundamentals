function mostFrequent(sequence) {
    var arr = sequence.split(', ').map(Number),
        element,
        maxFreqElement = arr[0],
        i,
        len,
        count = 1,
        maxFreqCount = 1;

    for (i = 0, len = arr.length; i < len; i += 1) {
        element = arr[i];
        count = 1;
        for (j = i + 1; j < len; j += 1) {
            if (arr[j] === element) {
                count += 1;
                if (count > maxFreqCount) {
                    maxFreqCount = count;
                    maxFreqElement = element;
                }
            }
        }
    }
    return maxFreqElement + ' (' + maxFreqCount + ' times' + ')';
}

function test() {
    var numbers = document.getElementById("sequence").value;

    if (validateInput(numbers)) {
        document.getElementById("result").innerHTML = mostFrequent(numbers);
        console.log(mostFrequent(numbers));
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
