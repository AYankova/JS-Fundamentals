function solve(params) {
    var rows = parseInt(params[0]),
        cols = parseInt(params[1]),
        tests = parseInt(params[rows + 2]),
        i, move;
    var matrix = [];
    var input = params.splice(2, rows).map(function(line) {
        return line.split('');
    });

    //console.log(input);

    for (var j = rows - 1; j >= 0; j--) {
        matrix[j] = [];
        for (var k = 0; k < cols; k++) {
            matrix[j][k] = '';
            matrix[j][k] += String.fromCharCode(97 + k) + (rows - j).toString();
        }

    }

    //console.log(matrix);
    console.log(tests);

    for (i = 0; i < tests; i++) {
        move = params[rows + i].split(' ');
        //console.log(move);
        var startPos = move[0];
        var startRow, startCol, targetRow, targetCol;
        var targetPos = move[1];
        //console.log(startPos);
        //console.log(targetPos);
        for (var m = 0; m < rows; m += 1) {
            for (k = 0; k < cols; k += 1) {
                if (matrix[m][k] === startPos) {
                    startRow = m;
                    startCol = k;
                }
                if (matrix[m][k] === targetPos) {
                    targetRow = m;
                    targetCol = k;
                }
            }
        }

        //console.log(startRow);
        //console.log(startCol);
        //console.log(targetRow);
        //console.log(targetCol);

        if (input[startRow][startCol] === 'Q') {
            if (input[targetRow][targetCol] === '-') {
                //console.log(input[targetRow][targetCol]);
                if (startRow < targetRow && startCol < targetCol) {
                    for (var j = startRow, k = startCol; j < targetRow, k < targetCol; j++, k++) {
                        if (input[j + 1][k + 1] !== '-') {
                            console.log('no');
                            break;
                        }
                    }
                    console.log('yes r');
                } else if (startRow > targetRow && startCol > targetCol) {
                    for (var j = startRow, k = startCol; j > targetRow, k > targetCol; j--, k--) {
                        if (input[j - 1][k - 1] !== '-') {
                            console.log('no');
                            break;
                        }
                    }
                    console.log('yes t');
                } else if (startRow < targetRow && startCol > targetCol) {
                    for (var j = startRow, k = targetCol; j < targetRow, k > startCol; j++, k--) {
                        if (input[j + 1][k - 1] !== '-') {
                            console.log('no');
                            break;
                        }
                    }
                    console.log('yes hh');
                } else if (startRow > targetRow && startCol < targetCol) {
                    for (var j = startRow, k = startCol; j > startRow, k > targetCol; j--, k++) {
                        if (input[j - 1][k + 1] !== '-') {
                            console.log('no');
                            break;
                        }
                    }

                    console.log('yes h');
                } else if (startRow === targetRow || startCol === targetCol) {
                		var isEmpty=true;
                                    console.log('cikal1');
                    if (startCol !== targetCol && startRow===targetRow) {
                        if (startCol > targetCol) {
                            for (var i = startCol-1; i >=targetCol; i--) {
                                if (input[startRow][i] !== '-') {
                                    //console.log('no');
                                    isEmpty=false;
                                    break;
                                }
                            }
                            //console.log('yes');
                        } else {

                                    console.log('cikal2');
                            for (var j = startCol+1; j <= targetCol; j++) {
                                if (input[startRow][j] !== '-') {
                                    //console.log('no');
                                    isEmpty=false;
                                    break;
                                }
                            }
                            //console.log('yes');
                        }
                    } else if (startRow!==targetRow && startCol===targetCol){

                                    console.log('cikal3');
                        if (startRow > targetRow) {
                            for (var i = startRow-1; i >= targetRow; i--) {
                                if (input[i][startCol] !== '-') {
                                    //console.log('no');
                                    isEmpty=false;
                                    break;
                                }
                            }
                            //console.log('yes');
                        } else {

                                    console.log('cikal4');
                            for (var j = startRow+1; j <= targetRow; j++) {
                                if (input[j][startCol] !== '-') {
                                    //console.log('no');
                                    isEmpty=false;
                                    break;
                                }
                            }
                          //  console.log('yes');
                        }
                    }

                    console.log(isEmpty?'yes':'no');
                }

            }
        } else if (input[startRow][startCol] === 'B') {
            if (input[targetRow][targetCol] === '-' && !(targetRow === startRow) || !(startCol === targetCol)) {
                console.log('yes');
            } else {
                console.log('no');
            }
        } else if (input[startRow][startCol] === 'R') {
            if (input[targetRow][targetCol] === '-' && (startCol === targetCol || startRow === targetRow)) {
                console.log('yes');
            } else {
                console.log('no');
            }
        } else if (input[startRow][startCol] === '-') {
            console.log('no');
        }

    }
    //console.log('yes'); // or console.log('no');
}
var args = [
    '3',
    '4',
    '--R-',
    'B--B',
    'Q--Q',
    '12',
    'd1 b3',
    'a1 a3',
    'c3 b2',
    'a1 c1',
    'a1 b2',
    'a1 c3',
    'a2 b3',
    'd2 c1',
    'b1 b2',
    'c3 b1',
    'a2 a3',
    'd1 d3',
];

solve(args);
