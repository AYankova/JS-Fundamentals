function findProps(obj) {
    var min = 'zzzzz',
        max = '';

    for (var prop in obj) {
        if (prop < min) {
            min = prop;
        }

        if (prop > max) {
            max = prop;
        }
    }

    return 'Lexicographically smallest property of ' + obj + ' is --> ' + min + ' and lexicographically largest is --> ' + max;
}

function test() {

    document.getElementById("window").innerHTML = findProps(window);
    console.log(findProps(window));
    document.getElementById("document").innerHTML = findProps(document);
    console.log(findProps(document));
    document.getElementById("navigator").innerHTML = findProps(navigator);
    console.log(findProps(navigator));
}
