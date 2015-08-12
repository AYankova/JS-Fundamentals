//Write a function that formats a string using placeholders.
//The function should work with up to 30 placeholders and all types.

function formatString() {
    var str = arguments[0],
        placeholder;

    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i += 1) {
            placeholder = "{" + (i - 1) + "}";
            for (var j = 0; j < str.length; j += 1) {
                str = str.replace(placeholder, arguments[i]);
            }
        }
    }

    return str;
}

//test
var str1 = formatString('Hello {0}!', 'Peter'),
    frmt = '{0}, {1}, {0} text {2}',
    str2 = formatString(frmt, 1, 'Pesho', 'Gosho');

console.log(str1);
console.log(str2);
