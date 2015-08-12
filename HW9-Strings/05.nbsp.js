//Write a function that replaces non breaking white-spaces in a text with &nbsp;

function replaceNbsp(text) {
    var result = '';

    for (var i = 0; i < text.length; i += 1) {
        if (text[i] === ' ') {
            result += '&nbsp;';
        } else {
            result += text[i];
        }
    }

    return result;
}

//test

var sample = 'We are living in an yellow submarine. We don\'t have anything else.';

console.log(replaceNbsp(sample));


/*
function replaceNbsp(text) {
   return text.split(' ').join('&nbsp;');
}
*/

/*
function replaceNbsp(text) {
   return text.replace(/ /g, '&nbsp;');
}
*/
