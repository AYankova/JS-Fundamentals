//--------------MAX SUBARRAY SUM(FASTER)

function Solve(params) {
    var N = parseInt(params[0]);
	var numbers = [];
	for (var i = 1; i <= N; i++) {
		numbers[i-1] = parseInt(params[i]);
	}

    function max(a, b) {
        return (a > b) ? a : b;
    }

    function maxSubArraySum(numbers, size) {
        var max_so_far = numbers[0],
            curr_max = numbers[0];

        for (var i = 1; i < size; i++) {
            curr_max = max(numbers[i], (curr_max + numbers[i]));
            max_so_far = max(max_so_far, curr_max);
        }
        return max_so_far;
    }

    return maxSubArraySum(numbers, N);
 
}
////////////////////////////////////////////////////////////////////////////
//----------MAX SUBARRAY SUM -II WAY

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

        for (var j = m + 1; j <= h; j++) {
            sum1 += numbers[j];

            if (sum1 > rightSum) {
                rightSum = sum1;
            }
        }
        return leftSum + rightSum;
    }

    function maxSubArraySum(numbers, l, h) {
        if (l === h) {
            return numbers[l];
        }

        var m = ((l + h) / 2)|0;
        return maxNum3(maxSubArraySum(numbers, l, m),
            maxSubArraySum(numbers, m + 1, h),
            maxInBetween(numbers, l, m, h));
    }
    return  maxSubArraySum(numbers, 0, N-1);

}
////////////////////////////////////////////////