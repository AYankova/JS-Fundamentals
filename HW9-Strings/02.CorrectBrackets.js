//Write a JavaScript function to check if in a given expression the brackets are put correctly.
//Example of correct expression: ((a+b)/5-d). Example of incorrect expression: )(a+b)).

function areBracketsCorrect(str) {
    var count = 0;
    for (var i = 0; i < str.length; i += 1) {
        if (str[i] === '(') {
            count += 1;
        } else if (str[i] === ')') {
            count -= 1;
        }

        if (count < 0) {
            return false;
        }
    }

    return (count === 0);
}


//test

var bracketsCorrect = '((a+b)/5-d)',
    bracketsIncorrect = ')(a+b))';

console.log(areBracketsCorrect(bracketsCorrect));
console.log(areBracketsCorrect(bracketsIncorrect));
