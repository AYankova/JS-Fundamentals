//Problem 1. Format with placeholders

//Write a function that formats a string. The function should have placeholders, as shown in the example
//Add the function to the String.prototype

if (!String.prototype.format) {
    String.prototype.format = function(options) {
        var regex, i, formatExp = this;
        for (i in options) {
            if (options[i]) {
                regex = new RegExp('#{' + i + '}', 'g');
                formatExp = formatExp.replace(regex, options[i]);
            }
        }
        return formatExp;
    };
}

var option1 = {
        name: 'John'
    },
    option2 = {
        name: 'John',
        age: 13
    };

console.log('Problem 1:');
console.log('Hello, there! Are you #{name}?'.format(option1));
console.log('My name is #{name} and I am #{age}-years-old'.format(option2));

//Problem 2. HTML binding

//Write a function that puts the value of an object into the content/attributes of HTML tags.
//Add the function to the String.prototype

if (!String.prototype.bind) {
    String.prototype.bind = function(args) {
        var result = this.replace(/ data-bind-content="(.*?)".*?>/g,
            function(match, bindName) {
                return match + args[bindName];
            });

        result = result.replace(/ data-bind-(.*?)="(.*?)"/g,
            function(match, bindType, bindName) {
                if (bindType === 'content') {
                    return match;
                } else {
                    return match + ' ' + bindType + '="' + args[bindName] + '"';
                }
            });

        return result;
    };
}
var str = '<div data-bind-content="name"></div>',
    bindingString = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></a>';

console.log('\nProblem 2:');
console.log(str.bind({
    name: 'Steven'
}));
console.log(bindingString.bind({
    name: 'Elena',
    link: 'http://telerikacademy.com'
}));
