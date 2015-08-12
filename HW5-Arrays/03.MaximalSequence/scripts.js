function maximalSequence(sequence) {
    var numbers = sequence.split(', ').map(Number),
        countEqualElements = 1,
        maxEqualElements = 1,
        maxSequence,
        end = 0,
        len,
        i;

    for (i = 0, len = numbers.length; i < len - 1; i += 1) {
        if (numbers[i] === numbers[i + 1]) {
            countEqualElements += 1;
            if (maxEqualElements < countEqualElements) {
                maxEqualElements = countEqualElements;
                end = i + 1;
            }
        } else {
            countEqualElements = 1;
        }
    }

    maxSequence = numbers.splice(end - maxEqualElements + 1, maxEqualElements);

    return maxSequence.join(', ');
}

function test() {
    var numbers = document.getElementById("sequence").value;

    if (validateInput(numbers)) {
        document.getElementById("result").innerHTML = maximalSequence(numbers);
        console.log(maximalSequence(numbers));
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

document.getElementById("sequence").style.width = "500px";
