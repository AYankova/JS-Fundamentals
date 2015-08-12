function Solve(args) {
var flowers = args[0].split(' ').map(Number),
        mollyFlowers = 0,
        dollyFlowers = 0,
        startMolly = 0,
        startDolly = flowers.length - 1;
    var nextMolly;
    var nextDolly;
    var used = [];
    var result = '';

    for (var i = 0; i < flowers.length; i += 1) {
        used[i] = true;
    }
    console.log(flowers);
    //console.log(startDolly);

    while (true) {

        if ((!used[startMolly] && used[startDolly] && startDolly !== startMolly) || (flowers[startMolly] === 0 && flowers[startDolly] !== 0)) {
        	console.log(1);
            dollyFlowers += flowers[startDolly];
            result += 'Dolly\n';
            break;
        } else if ((!used[startDolly] && used[startMolly] && startDolly !== startMolly) || (flowers[startDolly] === 0 && flowers[startMolly] !== 0)) {
        	console.log(2);
            mollyFlowers += flowers[startMolly];
            result += 'Molly\n';
            break;
        } else if (used[startMolly] && used[startDolly] && startMolly !== startDolly) {
            mollyFlowers += flowers[startMolly];
            used[startMolly] = false;
            //console.log(mollyFlowers);
            nextMolly = (startMolly + flowers[startMolly]) % flowers.length;
            console.log('Next Molly'+nextMolly);
            startMolly = nextMolly;

            dollyFlowers += flowers[startDolly];
            //console.log(startDolly);
            used[startDolly] = false;
            nextDolly = (startDolly - flowers[startDolly]%flowers.length ) >=0 ? (startDolly - flowers[startDolly]%flowers.length) : flowers.length -(flowers[startDolly] % flowers.length-startDolly);
            console.log('Next dolly' + nextDolly);
            startDolly = nextDolly;
        } else if (startMolly === startDolly && used[startDolly]) {
        	console.log('vlizam tuka');
            if (flowers[startDolly] % 2 === 0) {
                mollyFlowers += flowers[startMolly] / 2;
                dollyFlowers += flowers[startDolly] / 2;
                used[startDolly] = false;
            } else {
                mollyFlowers += (flowers[startMolly] / 2) | 0;
                dollyFlowers += (flowers[startDolly] / 2) | 0;
                flowers[startDolly] = 1;
            }
            result += 'Draw\n';
            break;
        } else {
            console.log(used[startMolly]);
            console.log(startDolly);
            console.log(startMolly);
            console.log(used[startDolly]);
            result += 'Draw\n';
            break;
        }
    }

    result += mollyFlowers + ' ' + dollyFlowers;
    return result;

}



var test = ['7 3 3 3 7'];

console.log(Solve(test));
