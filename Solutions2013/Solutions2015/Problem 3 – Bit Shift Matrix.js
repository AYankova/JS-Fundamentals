function Solve(args) {
    var R = parseInt(args[0]),
        C = parseInt(args[1]),
        allCommansCount = parseInt(args[2]),
        codes = args[3].split(' ').map(Number),
        coeff = Math.max(R, C),
        commands = [],
        matrix = [],
        sum = 1;

    for (var i = 0; i < allCommansCount; i += 1) {
        commands[i] = [];
        commands[i][0] = (codes[i] / coeff) | 0;
        commands[i][1] = codes[i] % coeff;
    }


    for (var j = R - 1; j >= 0; j -= 1) {
        matrix[j] = [];
        for (var k = 0; k < C; k += 1) {
            matrix[j][k] = Math.pow(2, R - j - 1 + k);
        }
    }

    var currentCol = 0;
    var currentRow = R - 1;
    matrix[currentRow][currentCol]='F';

    for (var l = 0; l < allCommansCount; l += 1) {

        while (currentCol !== commands[l][1]) {
            if (currentCol < commands[l][1]) {
                currentCol++;
            } else {
                currentCol--;
            }

            if (!isNaN(matrix[currentRow][currentCol])) {
                sum += matrix[currentRow][currentCol];
                matrix[currentRow][currentCol] = 'F';
            }
        }

        while (currentRow !== commands[l][0]) {
            if (currentRow < commands[l][0]) {
                currentRow++;
            } else {
                currentRow--;
            }

            if (!isNaN(matrix[currentRow][currentCol])) {
                sum += matrix[currentRow][currentCol];
                matrix[currentRow][currentCol] = 'F';
            }
        }
    }

    return sum;
}

var test = ['25', '19', '22', '9 31 377 176 482 301 113 267 532 592 225 440 135 187 306 243 262 590 357 411 191 576'];

console.log(Solve(test));
