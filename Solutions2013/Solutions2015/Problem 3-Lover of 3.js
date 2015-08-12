function Solve(args) {
    var dims = args[0].split(' ').map(Number),
        R = dims[0],
        C = dims[1],
        N = parseInt(args[1]),
        matrix = [],
        commands = [],
        sum = 0;

    for (var j = R - 1; j >= 0; j -= 1) {
        matrix[j] = [];
        for (var k = 0; k < C; k += 1) {
            matrix[j][k] = (R - j - 1) * 3 + 3 * k;
        }
    }

    //console.log(matrix);

    for (var i = 0; i < N; i += 1) {
        commands[i] = args[i + 2].split(' ');
    }
    //console.log(commands);
    var curRow = R - 1;
    var curCol = 0;
    var p;

    for (var m = 0; m < N; m += 1) {
        switch (commands[m][0]) {
            case 'RU':
            case 'UR':
                for (p = 0; p < parseInt(commands[m][1]) - 1; p += 1) {
                    if (curRow > 0 && curCol < C - 1) {
                        curCol++;
                        curRow--;
                    }
                    if (!isNaN(matrix[curRow][curCol])) {
                        sum += matrix[curRow][curCol];
                    }
                    matrix[curRow][curCol] = 'F';
                    //console.log('UR col ' + curCol);
                    //console.log('UR row ' + curRow);
                    //console.log('UR sum ' + curCol);
                }
                break;
            case 'LU':
            case 'UL':
                for (p = 0; p < parseInt(commands[m][1]) - 1; p += 1) {
                    if (curCol > 0 && curRow > 0) {
                        curCol--;
                        curRow--;
                    }
                    if (!isNaN(matrix[curRow][curCol])) {
                        sum += matrix[curRow][curCol];
                    }
                    matrix[curRow][curCol] = 'F';
                    //console.log('LU col ' + curCol);
                    //console.log('LU row ' + curRow);
                    //console.log('LU sum ' + curCol);
                }
                break;
            case 'DL':
            case 'LD':
                for (p = 0; p < parseInt(commands[m][1]) - 1; p += 1) {
                    if (curCol > 0 && curRow < R - 1) {
                        curCol--;
                        curRow++;
                    }
                    if (!isNaN(matrix[curRow][curCol])) {
                        sum += matrix[curRow][curCol];
                    }
                    matrix[curRow][curCol] = 'F';
                    //console.log('Dl col ' + curCol);
                    //console.log('DL row ' + curRow);
                    //console.log('DL sum ' + curCol);
                }
                break;
            case 'RD':
            case 'DR':
                for (p = 0; p < parseInt(commands[m][1]) - 1; p += 1) {
                    if (curCol < C - 1 && curRow < R - 1) {
                        curCol++;
                        curRow++;
                    }
                    if (!isNaN(matrix[curRow][curCol])) {
                        sum += matrix[curRow][curCol];
                    }
                    matrix[curRow][curCol] = 'F';
                    //console.log('RD col ' + curCol);
                    //console.log('RD row ' + curRow);
                    //console.log('RD sum ' + curCol);
                }
                break;
        }
    }


    return sum;
}

var test = ['61 46','61','LD 28',
'DL 22',
'UL 10',
'UR 7',
'RD 28',
'UL 7',
'UR 23',
'RU 11',
'UR 16',
'RD 12',
'DR 30',
'DL 6',
'DL 12',
'DR 19',
'UR 7',
'UL 2',
'UL 13',
'DL 22',
'RD 24',
'UL 15',
'LU 16',
'DR 17',
'UL 11',
'LD 7',
'DR 12',
'RD 10',
'LU 15',
'UL 6',
'RU 22',
'UR 17',
'UL 20',
'LD 15',
'UL 14',
'UL 21',
'LD 25',
'UR 4',
'LD 22',
'UL 17',
'UR 10',
'LU 21',
'RU 15',
'DL 9',
'DL 23',
'LD 14',
'RD 17',
'LD 16',
'LU 22',
'DL 20',
'DR 3',
'RD 14',
'LU 18',
'DL 22',
'UL 15',
'LU 12',
'LU 11',
'RU 10',
'UR 6',
'LD 21',
'RU 25',
'LD 6',
'LU 19'];

console.log(Solve(test));
