//Write a JavaScript function that reverses a string and returns it.

function reverse(str) {
    var result = '';
    for (var i = str.length - 1; i >= 0; i -= 1) {
        result += str[i];
    }

    return result;
}


//test
var test = 'sample';

console.log(reverse(test));


/*

function reverse(str){
	return str.split('').reverse().join('');
}

*/
