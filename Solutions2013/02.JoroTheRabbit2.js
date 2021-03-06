function solve(params) {
	var sizes = params[0].split(' ');
	
	var n = sizes[0] * 1, m = sizes[1] * 1, j = sizes[2] * 1;
	
	var start = params[1].split(' ');
	
	var r = start[0] * 1, c = start[1] * 1;
	var i = 2, sum = 0, cells = 1;
	
	var field = [];
	
	for (var j = 2; j < params.length; j+=1) {
		params[j] = params[j].split(' ');
		
	}
	
	while(r >= 0 && r < n && c >= 0 && c < m) {
		sum+= r * m + c + 1;
		if(field[r] === undefined) {
			field[r] = [];
		}
		field[r][c] = true;
		r+=params[i][0] * 1;
		c+=params[i][1] * 1;
		
		if(field[r] !== undefined) {
			if(field[r][c] == true) {
				console.log('caught ' + cells);
				return;
			}
			
			
		}
		
		if(i === params.length - 1){
			i = 2;
		} else {
			i += 1;
		}
		cells+=1;
	}
	
	console.log('escaped ' + sum);
	
}