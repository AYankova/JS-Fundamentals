function occurrencesOfWord(text, word, caseSensitive) {
    var wordsArr,
        count = 0,
        len,
        i;

    if (caseSensitive == null) { //checks both for null or undefined value
        caseSensitive = true;
    }

    if (caseSensitive === false) {
        text = text.toUpperCase();
        word = word.toUpperCase();
    }

    wordsArr = text.split(/\W+/);

    for (i = 0, len = wordsArr.length; i < len; i += 1) {
        if (wordsArr[i] === word) {
            count += 1;
        }
    }

    return count;
}

function test() {
    var text = document.getElementById("input").value,
        word = document.getElementById("word").value;

    if (text !== '' && word !== '') {
        document.getElementById("result").innerHTML = word + ' --> ' + occurrencesOfWord(text, word, true) + ' occurrence(s)';
        console.log(word + ' --> ' + occurrencesOfWord(text, word) + ' occurrence(s)');
    } else {
        document.getElementById("result").innerHTML = 'Incorrect input';
        console.log('Incorrect input');
    }

    document.getElementById("result").style.background = "yellow";
    document.getElementById("result").style.width = "250px";
    document.getElementById("result").style.textAlign = "center";
}

function clearme() {
    document.getElementById("input").value = '';
    document.getElementById("result").innerHTML = '';
    document.getElementById("word").value = '';
    window.location.reload();
}

document.getElementById("input").style.width = "350px";
document.getElementById("input").style.height = "150px";
