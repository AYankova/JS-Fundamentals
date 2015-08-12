//Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".

function findPalindromes(text) {
    var noPunctText = text.replace(/[^\w\s]|_/g, ' ').replace(/\s+/g, ' ').trim(),
        words = noPunctText.split(' '),
        result = [];

    for (var i = 0; i < words.length; i += 1) {
        if (isPalindrome(words[i]) && words[i].length > 2) {
            result.push(words[i]);
        }
    }
    return result.join(', ');
}

function isPalindrome(word) {
    for (var i = 0; i < word.length / 2; i += 1) {
        if (word[i] !== word[word.length - i - 1]) {
            return false;
        }
    }

    return true;
}

//test
var sample = 'deleveled, individual, detartrated, specific, devoved principle, dewed,identified, racecar, create, radar, derived,economic, testset, involved',
    test = 'I love ABBA very much. I listen to their music when making exe files. What the hell is lamal?';

console.log(findPalindromes(sample));
console.log(findPalindromes(test));
