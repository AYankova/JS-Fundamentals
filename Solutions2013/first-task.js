function solve(params) {
    var nk = params[0].split(' ').map(Number),
        n = nk[0],
        k = nk[1],
        s = params[1].split(' ').map(Number),
        result = 0,
        arr = [];



    for (var j = 0; j < k; j += 1) {

        if (s[0] === 0) {
            arr.push(Math.abs(s[s.length - 1] - s[1]));
        } else if (s[0] === 1) {
            arr.push(s[1] + s[s.length - 1]);
        } else if (s[0] % 2 === 0) {
            if (s[1] > s[s.length - 1]) {
                arr.push(s[1]);
            } else {
                arr.push(s[s.length - 1]);
            }
        } else {
            if (s[1] < s[s.length - 1]) {
                arr.push(s[1]);
            } else {
                arr.push(s[s.length - 1]);
            }
        }

        for (var i = 1; i < s.length - 1; i += 1) {
            var isEven = (s[i] % 2) === 0;
            if (s[i] === 0) {
                arr.push(Math.abs(s[i + 1] - s[i - 1]));
            } else if (s[i] === 1) {
                arr.push(s[i + 1] + s[i - 1]);
            } else if (isEven) {
                if (s[i - 1] >= s[i + 1]) {
                    arr.push(s[i - 1]);
                } else {
                    arr.push(s[i + 1]);
                }
            } else {
                if (s[i - 1] <= s[i + 1]) {
                    arr.push(s[i - 1]);
                } else {
                    arr.push(s[i + 1]);
                }
            }
        }
        if (s[s.length - 1] === 0) {
            arr.push(Math.abs(s[s.length - 2] - s[0]));
        } else if (s[s.length - 1] === 1) {
            arr.push(s[0] + s[s.length - 2]);
        } else if (s[s.length - 1] % 2 === 0) {
            if (s[0] > s[s.length - 2]) {
                arr.push(s[0]);
            } else {
                arr.push(s[s.length - 2]);
            }
        } else {
            if (s[0] < s[s.length - 2]) {
                arr.push(s[0]);
            } else {
                arr.push(s[s.length - 2]);
            }
        }

        s = arr;
        arr = [];


    }

    for (i = 0; i < s.length; i++) {
        result += s[i];
    }

    console.log(result);
}


var args = ["10 3",
"1 9 1 9 1 9 1 9 1 9"];

solve(args);
