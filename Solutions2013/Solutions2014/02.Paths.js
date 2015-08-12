function Solve(args) {
    var dims = args[0].split(' ').map(Number),
        R = dims[0],
        C = dims[1],
        matrix = [],
        sum = 0;

    for (var i = 0; i < R; i += 1) {
        matrix[i] = [];
        for (var j = 0; j < C; j += 1) {
            matrix[i][j] = Math.pow(2, i) + j;
        }
    }
    //console.dir(matrix);

    var dirs = [];
    for (var k = 0; k < R; k += 1) {
        dirs[k] = args[k + 1].split(' ');
    }
    //console.log(dirs);
    //var used={};
    var curRow = 0;
    var curCol = 0;

    while (true) {
        switch (dirs[curRow][curCol]) {
            case 'dr':
                //console.log(matrix[curRow][curRow]);
                //console.log(sum);
                //console.log(curRow);
                //console.log(curCol);
                if (!isNaN(matrix[curRow][curCol])) {
                    sum += matrix[curRow][curCol];
                    matrix[curRow][curCol] = 'F';
                    curRow++;
                    curCol++;
                } else {
                    return 'failed at (' + curRow + ', ' + curCol + ')';
                }
                if (curCol < 0 || curRow < 0 || curCol >= C || curRow >= R) return 'successed with ' + sum;
                break;
            case 'ur':

                //console.log(matrix[curRow][curRow]);
                //console.log(sum);
                //console.log(curRow);
                //console.log(curCol);
                if (!isNaN(matrix[curRow][curCol])) {
                    sum += matrix[curRow][curCol];
                    matrix[curRow][curCol] = 'F';
                    curRow--;
                    curCol++;
                } else {
                    return 'failed at (' + curRow + ', ' + curCol + ')';
                }
                if (curCol < 0 || curRow < 0 || curCol >= C || curRow >= R) return 'successed with ' + sum;
                break;
            case 'dl':
                //console.log(matrix[curRow][curRow]);
                // console.log(sum);
                //console.log(curRow);
                //console.log(curCol);
                if (!isNaN(matrix[curRow][curCol])) {
                    sum += matrix[curRow][curCol];
                    matrix[curRow][curCol] = 'F';
                    curRow++;
                    curCol--;
                } else {
                    return 'failed at (' + curRow + ', ' + curCol + ')';
                }
                if (curCol < 0 || curRow < 0 || curCol >= C || curRow >= R) return 'successed with ' + sum;
                break;
            case 'ul':
                //console.log(matrix[curRow][curRow]);
                // console.log(sum);
                //console.log(curRow);
                //console.log(curCol);
                if (!isNaN(matrix[curRow][curCol])) {
                    sum += matrix[curRow][curCol];
                    matrix[curRow][curCol] = 'F';
                    curRow--;
                    curCol--;
                } else {
                    return 'failed at (' + curRow + ', ' + curCol + ')';
                }
                if (curCol < 0 || curRow < 0 || curCol >= C || curRow >= R) return 'successed with ' + sum;
                break;

        }
    }
    return 'successed with ' + sum;

}

var args = ['3 5',
    'dr dl dr ur ul',
    'dr dr ul ur ur',
    'dl dr ur dl ur'
];


console.log(Solve(args));

var args2 = ['3 5',
    'dr dl dl ur ul',
    'dr dr ul ul ur',
    'dl dr ur dl ur'
];

console.log(Solve(args2));
