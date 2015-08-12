//Problem1
//Write a function for creating persons.
//Each person must have firstname, lastname, age and gender (true is female, false is male)
//Generate an array with ten person with different names, ages and genders

function Person(fname, lname, age, gender) {
    if (isNaN(age) || !isFinite(age)) {
        throw new Error('Incorrect age!');
    }

    if (typeof(gender) !== 'boolean') {
        throw new Error('Type true for female or false for male!');
    }

    if (!(this instanceof Person)) {
        return new Person(fname, lname, age, gender);
    }

    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.gender = gender;
}

Person.prototype.toString = function() {
    return this.fname + ' ' + this.lname + ' ' + this.age + ' ' + (this.gender ? 'Female' : 'Male');
};

var people = [new Person('Ivan', 'Ivanov', 25, false),
    new Person('Vanya', 'Kostova', 19, true),
    new Person('Ani', 'Nikolova', 22, true),
    new Person('Ivo', 'Nikolov', 28, false),
    new Person('Sanya', 'Borisova', 17, true),
    new Person('Daniel', 'Petrov', 30, false),
    new Person('Sasho', 'Kolev', 43, false),
    new Person('Viktor', 'Dobrev', 11, false),
    new Person('Yana', 'Georgieva', 24, true),
    new Person('Kiril', 'Gospodinov', 33, false),
];

console.log('Problem 1:');
for (var i in people) {
    if (people[i]) {
        console.log(people[i].toString());
    }
}

//Problem 2
//Write a function that checks if an array of person contains only people of age (with age 18 or greater)
//Use only array methods and no regular loops (for, while)

var olderThan18 = people.every(function(person) {
    return person.age >= 18;
});

console.log('\nProblem 2:');
console.log(olderThan18);

//Problem 3
//Write a function that prints all underaged persons of an array of person
//Use Array#filter and Array#forEach
//Use only array methods and no regular loops (for, while)

console.log('\nProblem3:');

people.filter(function(person) {
    return person.age < 18;
}).forEach(function(underagedPeople) {
    console.log(underagedPeople.toString());
});

//Problem 4
//Write a function that calculates the average age of all females, extracted from an array of persons
//Use Array#filter
//Use only array methods and no regular loops (for, while)

var femaleAverageAge = people.filter(function(person) {
    return person.gender;
}).reduce(function(sum, female, i, females) {
    return sum + female.age / females.length;
}, 0);

console.log('\nProblem 4:');
console.log(femaleAverageAge);

//Problem 5
//Write a function that finds the youngest male person in a given array of people and prints his full name
//Use only array methods and no regular loops (for, while)
//Use Array#find

if (!Array.prototype.find) {
    Array.prototype.find = function(callback) {
        var i, len = this.length;

        for (i = 0; i < len; i += 1) {
            if (callback(this[i], i, this)) {
                return this[i];
            }
        }
    };
}

var youngestMan = people.sort(function(p1, p2) {
    return p1.age - p2.age;
}).find(function(person) {
    return !(person.gender);
});

console.log('\nProblem 5:');
console.log(youngestMan.fname + ' ' + youngestMan.lname);


//Problem 6
//Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
//Use Array#reduce
//Use only array methods and no regular loops (for, while)

var groupedByFirstLetter = people.sort(function(p1, p2) {
    return p1.fname > p2.fname;
}).reduce(function(grouped, person) {
    var group = person.fname[0].toLowerCase();

    if (!grouped[group]) {
        grouped[group] = [];
    }

    grouped[group].push(person);

    return grouped;
}, {});

console.log('\nProblem6:\nresult=');
console.log(groupedByFirstLetter);
