function solve(params) {
    var s = params[0] * 1;
    var count = 0;

    var cars = 4,
        trucks = 10,
        trikes = 3;

    for (var i = 0; i <= (s / cars); i++) {
        for (var j = 0; j <= (s / trucks); j++) {
            for (var k = 0; k <= (s / trikes); k++) {
                var total = (i * cars) + (j * trucks) + (k * trikes);
                if (total === s) {

                    count++;
                }
            }
        }
    }

    console.log(count);
}