/*Write a function that groups an array of people by age, first or last name.
The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
Use function overloading (i.e. just one function). */

function groupPeople(people, prop) {
    var grouped = [],

        len = people.length;

    switch (arguments.length) {
        case 1:
            {
                var byAge = [],
                    byFirstName = [],
                    byLastName = [];

                for (var i = 0; i < len; i += 1) {
                    byAge[i] = people[i].age;
                    byFirstName[i] = people[i].firstname;
                    byLastName[i] = people[i].lastname;
                }

                grouped.firstname = byFirstName;
                grouped.lastname = byLastName;
                grouped.age = byAge;

                return grouped;
            }
        case 2:
            {
                var result = [];
                for (var j = 0; j < len; j += 1) {

                    switch (prop) {
                        case 'age':
                            result[j] = people[j].age;
                            break;
                        case 'firstname':
                            result[j] = people[j].firstname;
                            break;
                        case 'lastname':
                            result[j] = people[j].lastname;
                            break;
                    }
                }

                grouped[prop] = result;
                return result;
            }
    }
}

var people = [{
        firstname: 'Gosho',
        lastname: 'Petrov',
        age: 32
    }, {
        firstname: 'Bay',
        lastname: 'Ivan',
        age: 81
    }, {
        firstname: 'Joro',
        lastname: 'Ignatov',
        age: 37
    }, {
        firstname: 'Aleks',
        lastname: 'Kolev',
        age: 14
    }, {
        firstname: 'Daniel',
        lastname: 'Ivanov',
        age: 26
    }],
    props = ['firstname', 'lastname', 'age'],
    grouped = groupPeople(people),
    groupedByFirstName = groupPeople(people, 'firstname'),
    groupedByLastName = groupPeople(people, 'lastname'),
    groupedByAge = groupPeople(people, 'age');

for (var i in props) {
    console.log('Grouped by: ' + props[i]);
    console.log(grouped[props[i]]);
}

console.log('\nWith property:');
console.log(groupedByFirstName);
console.log(groupedByLastName);
console.log(groupedByAge);
