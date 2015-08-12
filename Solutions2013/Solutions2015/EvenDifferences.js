function Solve(args) {
    var sequence = [],
        sum = 0;

    for (var i = 0, len = args.length; i < len; i += 1) {
        sequence[i] = parseInt(args[i]);
    }

    function absoluteDifference(a, b) {
        return Math.abs(a - b);
    }

    function isEven(number) {
        return !(number % 2);
    }

    var absSequence = [];
    var k = 0;
    
    for (var j = 0, lenSequence = sequence.length; j < lenSequence - 1; j += 1, k += 1) {
        absSequence[k] = absoluteDifference(sequence[j], sequence[j + 1])
        if (isEven(absSequence[k])) j += 1;
    }


    for (j = 0; j < absSequence.length; j += 1) {
        if (isEven(absSequence[j])) {
            sum += absSequence[j];
        }
    }

    return sum;
}

var test = ['1', '6', '8', '10', '3', '1', '1'];

console.log(Solve(test));


var test1 = ['-5', '5', '1', '8', '-4', '1', '2'];

console.log(Solve(test1));
