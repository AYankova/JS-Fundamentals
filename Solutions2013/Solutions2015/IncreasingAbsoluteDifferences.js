function Solve(args) {
    var countSeqs = parseInt(args[0]),
        sequence = [],
        result = '',
        isInc = true;

    for (var i = 0, len = countSeqs; i < len; i += 1) {
        sequence[i] = [];
        sequence[i] = args[i + 1].split(' ').map(Number);
    }

    function absoluteDifference(a, b) {
        return Math.abs(a - b);
    }

    function isIncreasing(a, b) {
        return (a <= b) && ((b - a) === 1 || ((b - a) === 0));
    }

    var absSequence = [];

    for (var j = 0, lenSequence = sequence.length; j < lenSequence; j += 1) {
        absSequence[j] = [];
        for (var k = 0; k < sequence[j].length - 1; k += 1)
            absSequence[j][k] = absoluteDifference(sequence[j][k], sequence[j][k + 1]);
    }

    for (j = 0; j < absSequence.length; j += 1) {
        for (var l = 0; l < absSequence[j].length - 1; l += 1) {
            if (!isIncreasing(absSequence[j][l], absSequence[j][l + 1])) {
                isInc = false;
                break;
            }
        }

        if (isInc) {
            result += 'true' + '\n'
        } else {
            result += 'false' + '\n';
            isInc = true;
        }
    }

    return result.trim();;
}

var test = ['4', '1 2 4 7 10', '-1 2 4 1 5', '-2 -2 -1 0 2 4 1 5', '3 2 4 1 4'];

console.log(Solve(test));


var test1 = ['5', '0 1 2 3 5', '2 4 7', '4 7 4', '5 7 4', '3 2 4 8'];

console.log(Solve(test1));
