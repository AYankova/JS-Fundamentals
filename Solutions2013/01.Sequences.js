/*
function Solve(input) {
    var result = 1;
    input = input.map(Number);

    for (var i = 2; i < input.length; i += 1) {
        if (input[i - 1] > input[i])
            result++;
    }

    return result;
}
*/
var test1 = ['7', '1', '2', '-3', '4', '4', '0', '1'];

console.log(Solve(test1));


var test2 = ['6', '1', '3', '-5', '8', '7', '-6'];

console.log(Solve(test2));

var test3 = ['9', '1', '8', '8', '7', '6', '5', '7', '7', '6'];

console.log(Solve(test3));

function Solve(params) {
	var N = parseInt(params[0]);
	var count = 1;
	var last = parseInt(params[1]);

	for (var i = 2; i <= N; i+=1) {
		var current = parseInt(params[i]);
		if (current < last) {
			count++;
		}
		
		last = current;
	}

return count;
}
