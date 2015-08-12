//Write a function that creates a HTML <ul> using a template for every HTML <li>.
//The source of the list should be an array of elements.
//Replace all placeholders marked with –{…}– with the value of the corresponding property of the object.

function generateList(people, template) {
    var result = '<ul>';

    for (var item in people) {
        result += '<li>' +
            template.replace('-{name}-', people[item].name).replace('-{age}-', people[item].age) +
            '</li>';
    }

    result += '</ul>';

    return result;
}

var people = [{
        name: 'Peter',
        age: 14
    }, {
        name: 'Vasko',
        age: 26
    }, {
        name: 'Ivan',
        age: 33
    }, {
        name: 'Sasho',
        age: 21
    }, {
        name: 'Alex',
        age: 24
    }],
    placeholder = document.getElementById('list-item').innerHTML,
    peopleList = generateList(people, placeholder);

document.getElementById('result').innerHTML = peopleList;
console.log(peopleList);
