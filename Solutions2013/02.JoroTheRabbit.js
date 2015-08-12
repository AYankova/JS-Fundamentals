function Solve(args) {
    var dims = args[0].split(' ').map(Number);
    var N = dims[0];
    var M = dims[1];
    var J = dims[2];
    var start = args[1].split(' ').map(Number);
    var jumps = 0;
    var sum = 0;
    var row = start[0];
    var col = start[1];
    var visited = {};
    var nextCells = args.splice(2);
    var i = 0;

    function getValueAt(row, col, M) {
        return row * M + col + 1;
    }

    while (row >= 0 && col >= 0 && row < N && col < M) {
    	 if(i===(J)) i=0;
        if (visited[row]){
        	if(visited[row][col]) {
            return 'caught ' + jumps;
        } }else {
            visited[row] = false;
            visited[row][col]=true;
            jumps++;
            sum += getValueAt(row, col, M);
            row += nextCells[i].split(' ').map(Number)[0];
            col += nextCells[i].split(' ').map(Number)[1];                 
            i++;
        }
    }

    return 'escaped ' + sum;
}

var test = ['6 7 3', '0 0', '2 2', '-2 2', '3 -1'];
//console.log(Solve(test));

var test2=['500 500 1', '0 0','1 1'];
console.log(Solve(test2));
