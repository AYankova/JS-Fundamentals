/*Write a function that finds the youngest person in a given array of people and prints his/hers full name
Each person has properties firstname, lastname and age.*/

function youngestPerson(people) {
    var minAge = people[0].age,
        ind = 0;

    for (var i = 1, len = people.length; i < len; i += 1) {
        if (minAge > people[i].age) {
            minAge = people[i].age;
            ind = i;
        }
    }

    return people[ind].firstname + ' ' + people[ind].lastname;
}


//test
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
}];

console.log(youngestPerson(people));



/*
function youngestPerson(people) {
    people.sort(compareByAge);
    return people[0].firstname + ' ' + people[0].lastname;
}

function compareByAge(first, second) {
    return first.age - second.age;
}
*/
