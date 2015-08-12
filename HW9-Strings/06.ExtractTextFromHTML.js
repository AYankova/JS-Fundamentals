//Write a function that extracts the content of a html page given as text.
//The function should return anything that is in a tag, without the tags.

function extractHTML(text) {
    var inTag = false,
        result = '';

    for (var i = 0; i < text.length; i += 1) {
        if (text[i] === '<') {
            inTag = true;
        } else if (text[i] === '>') {
            inTag = false;
        } else if (!inTag) {
            result += text[i];
        }
    }

    return result;
}



//test

var sample = "<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>";

console.log(extractHTML(sample));


/*
function extractHTML(text) {
 return text.replace(/<(.*?)>/g, '');
}
*/
