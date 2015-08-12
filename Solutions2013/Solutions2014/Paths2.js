function solve(args) {
 
    'use strict';
    var row, col, sum = 0,directions, matrix = [];
    var sizes = args[0].split(' ').map(Number);
    var rows = sizes[0];
    var cols = sizes[1];
    args = args.slice(1).map(function (line) {
        return line.split(' ');
    });
    for (row = 0; row < rows; row++) {
        var number = Math.pow(2, row);
        matrix[row] = [];
 
        for (col = 0; col < cols; col++) {
            matrix[row][col] = number++;
        }
    }
    row = 0;
    col = 0;
    directions = {
        dr: {
            row: 1,
            col: 1
        },
        ur: {
            row: -1,
            col: 1
        },
        ul: {
            row: -1,
            col: -1
        },
        dl: {
            row: 1,
            col: -1
        }
    };
    while (true) {
        if (row < 0 || row >= rows || col < 0 || col >= cols) {
            console.log('successed with ' + sum);
            break;
        }
 
        var step = matrix[row][col];
 
        if (step === 'stepped') {
            console.log('failed at ' + '('+row + ', ' + col+')');
            break;
        }
 
        sum += step;
        matrix[row][col] = 'stepped';
        var temp = args[row][col];
        row += directions[temp].row;
        col += directions[temp].col;
 
    }
}