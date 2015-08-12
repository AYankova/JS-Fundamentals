/*function Solve(params) {
    var N = params[0] | 0,
        answer = Number.NEGATIVE_INFINITY;
        numbers=params.splice(1,N);
        for (var i = 0; i < N ; i+=1) {
        	numbers[i]|=0;
        }

    for (var c = 0; c < N; c += 1) {
        for (var j = c; j < N; j += 1) {
            var sum = 0;
            for (var k = c; k <= j; k += 1) {
                sum += numbers[k];
            }
            if (sum > answer) {
                answer = sum;
            }
        }
    }

    return answer;
}*/


function Solve(params) {
    var N = parseInt(params[0]);
	var numbers = [];
	for (var i = 1; i <= N; i++) {
		numbers[i-1] = parseInt(params[i]);
	}

    function maxNum2(a, b) {
        return (a > b) ? a : b;
    }

    function maxNum3(a, b, c) {
        return maxNum2(maxNum2(a, b), c);
    }

    function maxInBetween(numbers, l, m, h) {
        var sum = 0;
        var leftSum = Number.NEGATIVE_INFINITY;

        for (var i = m; i >= l; i--) {
            sum += numbers[i];

            if (sum > leftSum) {
                leftSum = sum;
            }
        }
        var sum1 = 0;
        var rightSum = Number.NEGATIVE_INFINITY;

        for (var i = m + 1; i <= h; i++) {
            sum1 += numbers[i];

            if (sum1 > rightSum) {
                rightSum = sum1;
            }
        }
        return leftSum + rightSum;
    }

    function maxSubArraySum(numbers, l, h) {
        if (l == h) {
            return numbers[l];
        }

        var m = ((l + h) / 2)|0;
        return maxNum3(maxSubArraySum(numbers, l, m),
            maxSubArraySum(numbers, m + 1, h),
            maxInBetween(numbers, l, m, h));
    }
    return  maxSubArraySum(numbers, 0, N-1);
  
}
var params = [6, 1, 3, -5, 8, 7, -6];
console.log(Solve(params));
