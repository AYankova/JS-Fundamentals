function maximalIncreasingSequence(sequence) {
    var arr = sequence.split(', ').map(Number),
        maxIncreasSeq,
        len,
        i,
        count = 1,
        maxCount = 1,
        end = 0;

    for (i = 1, len = arr.length; i < len; i += 1) {
        if (arr[i - 1] < arr[i]) {
            count += 1;
            if (maxCount < count) {
                maxCount = count;
                end = i;
            }
        } else {
            count = 1;
        }
    }

    maxIncreasSeq = arr.splice(end - maxCount + 1, maxCount);

    return maxIncreasSeq.join(', ');
}

function test() {
    var numbers = document.getElementById("sequence").value;

    if (validateInput(numbers)) {
        document.getElementById("result").innerHTML = maximalIncreasingSequence(numbers);
        console.log(maximalIncreasingSequence(numbers));
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

document.getElementById("sequence").style.width = "400px";
