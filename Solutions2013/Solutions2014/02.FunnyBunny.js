function Solve(args) {
    var input = args.map(Number),
        cycle = 1,
        initialSum = input[0],
        sum = 0,
        product = 1,
        result = '';

    console.log(input);
    while (initialSum <= input.length - 1) {
        for (var i = cycle; i < initialSum+cycle; i++) {
            sum += input[i];
            product *= input[i];
        }
        console.log("sum "+sum);
        console.log("product"+product);
        result += sum.toString() + product.toString() + input.splice(initialSum+cycle).join('');
        console.log('result'+result);
        input = [];
        input = result.split('').map(Number);
        console.log(input);
        var indexOfOne = input.indexOf(1);
        console.log(indexOfOne);

        while (indexOfOne >= 0) {
            input.splice(indexOfOne, 1);
            indexOfOne = input.indexOf(1);

        }

        var indexOfZero = input.indexOf(0);
        while (indexOfZero >= 0) {
            input.splice(indexOfZero, 1);
            indexOfZero = input.indexOf(0);

        }
        initialSum = 0;
        sum=0;
        product=1;
                cycle++;
                result='';
        for (i = 0; i < cycle; i += 1) {
            initialSum += input[i];
        }
        console.log(input);
        console.log('initial ' + initialSum);

    }

    return input.join(' ').toString();
}

var test = [
'49',
'29',
'32',
'35',
'25',
'61',
'58',
'89',
'23',
'89',
'90',
'87',
'37',
'20',
'81',
'54',
'91',
'28',
'96',
'82',
'63',
'76',
'31',
'92',
'72',
'86',
'3','24',
'64',
'93',
'35',
'70',
'89',
'53',
'2','33',
'30',
'8','5','65',
'19',
'46',
'46',
'46',
'83',
'14',
'29',
'51',
'54',
'95',
'47',
'60',
'23',
'46',
'31',
'72',
'98',
'39',
'62',
'38',
'59',
'35',
'27',
'29',
'56',
'21',
'98',
'83',
'20',
'50',
'25',
'85',
'24',
'33',
'65',
'18',
'32',
'85',
'11',
'59',
'59',
'52',
'70',
'68',
'48',
'74',
'48',
'45',
'23',
'29',
'35',
'91',
'45',
'66',
'7','83',
'21',
'19',
'90',
'63'];
console.log(Solve(test));
