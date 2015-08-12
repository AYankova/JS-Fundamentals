function comapareLexicographycallyTwoArrays(sequence1, sequence2) {
    var len1 = sequence1.length,
        len2 = sequence2.length,
        result = '',
        i;

    for (i = 0; i < Math.min(len1, len2); i += 1) {
        if (sequence1[i] !== sequence2[i]) {
            result = sequence1[i] < sequence2[i] ? 'First sequence comes first' : 'Second sequence comes first';
            return result;
        }
    }

    if (result === '') {
        if (len1 === len2) {
            return 'Sequences are equal';
        } else return len1 < len2 ? 'First sequence comes first' : 'Second sequence comes first';
    }
}

function test() {
    var sequence1 = document.getElementById("sequence1").value;
    var sequence2 = document.getElementById("sequence2").value;

    if (sequence1 !== '' && sequence2 !== '') {
        document.getElementById("result").innerHTML = comapareLexicographycallyTwoArrays(sequence1, sequence2);
        console.log(comapareLexicographycallyTwoArrays(sequence1, sequence2));
    } else {
        document.getElementById("result").innerHTML = 'Incorrect input';
        console.log('Incorrect input');
    }

    document.getElementById("result").style.background = "blanchedalmond";
    document.getElementById("result").style.width = "200px";
}

function clearme() {
    document.getElementById("sequence1").value = '';
    document.getElementById("sequence2").value = '';
    document.getElementById("result").innerHTML = '';
    window.location.reload();
}
