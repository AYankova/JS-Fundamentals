function solve(params) {
    var nk = params[0].split(' ').map(Number),
        n = nk[0],
        k = nk[1],
        s = params[1].split(' ').map(Number),
        result = 0;

    //console.log(n);
    //console.log(k);
    //console.log(s);
    //console.log(result);

    for (var j = 0; j < k; j += 1) {
        for (var i = 1; i < s.length - 2; i += 1) {
            var isEven = s[i] % 2 === 0;
            //console.log('I ' + i);
            if (s[i] === 0) {
                result += Math.abs(s[0] - s[s.length - 1]);
                //console.log(result);
                //console.log(s[i]);
            }
            if (s[i] === 1) {
                result += s[0] + s[s.length - 1];
                //console.log(result);
                //console.log(s[i]);
            }
            if (isEven) {
                if (s[0] > s[s.length - 1]) {
                    //console.log(result);
                    //console.log(i);
                    result += s[0];
                } else {

                    result += s[s.length - 1];
                    //console.log(result);
                    //console.log(s[i]);
                }
            }
            if (!isEven) {
                if (s[0] < s[s.length - 1]) {
                    result += s[0];
                    //console.log(result);
                    //console.log(i);
                } else {
                    result += s[s.length - 1];
                    //console.log(result);
                    //console.log(i);
                }
            }
        }

    }

    console.log(result);
}


var args = ['10 3',
    '1 9 1 9 1 9 1 9 1 9'
];

solve(args);
