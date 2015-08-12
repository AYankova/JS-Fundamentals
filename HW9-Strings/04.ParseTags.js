/*
You are given a text. Write a function that changes the text in all regions:

<upcase>text</upcase> to uppercase.
<lowcase>text</lowcase> to lowercase
<mixcase>text</mixcase> to mix casing(random)
Example: We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.

The expected result:
We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.

Note: Regions can be nested.  */

function changeText(text) {
    var result = '';

    for (var i = 0; i < text.length; i += 1) {
        if (text[i] === '<' && text[i + 1] === 'u') {
            i += 8;
            while (text[i] !== '<') {
                result += text[i].toUpperCase();
                i += 1;
            }
            if (text[i + 1] === '/' && text[i + 2] === 'u') {
                i += 8;
            } else {
                i -= 1;
            }
        } else if (text[i] === '<' && text[i + 1] === 'm') {
            i += 9;
            while (text[i] !== '<') {
                if (Math.random() < 0.5) {
                    result += text[i].toUpperCase();
                    i += 1;
                } else {
                    result += text[i].toLowerCase();
                    i += 1;
                }
            }
            if (text[i + 1] === '/' && text[i + 2] === 'm') {
                i += 9;
            } else {
                i -= 1;
            }
        } else if (text[i] === '<' && text[i + 1] === 'l') {
            i += 9;
            while (text[i] !== '<') {
                result += text[i].toLowerCase();
                i += 1;
            }
            if (text[i + 1] == '/' && text[i + 2] === 'l') {
                i += 9;
            } else {
                i -= 1;
            }
        } else if (text[i] === '<' && text[i + 1] === '/') {
            switch (text[i + 2]) {
                case 'm':
                    i += 9;
                    break;
                case 'u':
                    i += 8;
                    break;
                case 'l':
                    i += 9;
                    break;
            }
        } else {
            result += text[i];
        }
    }

    return result;
}


//test

var sample = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>ANyTHinG</lowcase> else.',
    sample1 = '<lowcase>ANyTHinG</lowcase> else <upcase>we <mixcase>have <upcase>now <lowcase>UNFORTUNATELY</lowcase></upcase></mixcase></upcase>';

console.log(changeText(sample));
console.log(changeText(sample1));
