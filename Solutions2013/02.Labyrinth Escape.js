function Solve(args) {
    var dimensions = args[0].split(' ').map(Number);
    var rows = dimensions[0];
    var cols = dimensions[1];
    var matrix = [];
    var m = 0;
    var sum = 0;
    var result = '';

    for (var i = 0; i < rows; i += 1) {
        matrix[i] = [];
        for (var j = 0; j < cols; j += 1) {
            matrix[i][j] = j + m + 1;
        }
        m += cols;
    }

    var directions = [];

    for (var k = 0; k < rows; k += 1) {
        directions[k] = [];
        for (var l = 0; l < cols; l += 1) {
            directions[k][l] = args[2 + k][l];
        }
    }

    var start = args[1].split(' ').map(Number);
    var indRow = start[0];
    var indCol = start[1];
    var paths=0;

    while (indCol >= 0 && indRow >= 0 && indCol < cols && indRow < rows) {
        if (directions[indRow][indCol]) {
            switch (directions[indRow][indCol]) {
                case 'l':
                    sum += matrix[indRow][indCol];
                    directions[indRow][indCol] = false;
                    indCol = indCol - 1;
                    paths+=1;
                    break;
                case 'r':
                    sum += matrix[indRow][indCol];
                    directions[indRow][indCol] = false;
                    indCol = indCol + 1;
                    paths+=1;
                    break;
                case 'u':
                    sum += matrix[indRow][indCol];
                    directions[indRow][indCol] = false;
                    indRow = indRow - 1;
                    paths+=1;
                    break;
                case 'd':
                    sum += matrix[indRow][indCol];
                    directions[indRow][indCol] = false;
                    indRow = indRow + 1;
                    paths+=1;
                    break;

            }
        } else {
            result += 'lost ';
            break;
        }
    }

    if (!result) {
        console.log('out ' + sum);
    } else {
        console.log(result + paths);
    }
}

//////////////////////////////////
