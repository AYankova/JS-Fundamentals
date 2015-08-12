/*Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).
Example:

The target sub-string is in

The text is as follows: We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.

The result is: 9   */

function countSubstrOccurrence(text, word) {
    var regex = new RegExp(word, 'gi');

    return text.match(regex).length;
}



//test
var text = 'The text is as follows: We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.',
    word = 'in';

console.log(countSubstrOccurrence(text, word));


/*
function countSubstrOccurrence(text, word) {
    var count = 0,
        input = text.toUpperCase(),
        wrd = word.toUpperCase(),
        index = input.indexOf(wrd),
        temp = input.substr(index + wrd.length);


    while (index >= 0 && temp !== '') {
        count += 1;
        index = temp.indexOf(wrd);
        temp = temp.substring(index + wrd.length);
    }

    return count;
} 
*/

/*
function countSubstrOccurrence(text, word) {
    var count = 0;

    for (var i = 0; i <= text.length - word.length; i += 1) {
        var substr = text.substr(i, word.length);
        if (word.toUpperCase() === substr.toUpperCase()) {
            count += 1;
        }
    }

    return count;
} 
*/
