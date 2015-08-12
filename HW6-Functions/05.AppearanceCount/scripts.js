function countNumber(arr, num) {
    var count = 0,
        i,
        len;

    for (i = 0, len = arr.length; i < len; i += 1) {
        if (arr[i] === num) {
            count += 1;
        }
    }

    return count;

}

function test() {
    var input = document.getElementById("input").value,
        number = document.getElementById("number").value;

    if (validateInput(input) && number !== '' && (!isNaN(number))) {
        array = input.split(', ').map(Number);
        number *= 1;
        document.getElementById("result").innerHTML = number + ' --> ' +
            countNumber(array, number) + ' time(s)';
        console.log(number + ' --> ' +
            countNumber(array, number) + ' time(s)');
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

function builtInTest() {
    var testArr = [4, 4, 4, 2, 2, 2, 2, 4, 4, 4, 1, 2, 3, 4, 3, 2],
        test1 = countNumber(testArr, 1),
        test2 = countNumber(testArr, 2),
        test3 = countNumber(testArr, 3),
        test4 = countNumber(testArr, 4);

    document.getElementById("result").innerHTML = 'Results from the test array: ' + testArr.join(', ') +
        '<br/> Count of 1: ' + test1 + '<br/> Count of 2: ' + test2 + '<br/> Count of 3: ' + test3 +
        '<br/> Count of 4: ' + test4;

    console.log('Test array: ' + testArr.join(', '));
    console.log('Count of 1: ' + test1);
    console.log('Count of 2: ' + test2);
    console.log('Count of 3: ' + test3);
    console.log('Count of 4: ' + test4);
}

document.getElementById("input").style.width = '400px';
