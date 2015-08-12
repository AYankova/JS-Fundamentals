//Write a function that checks if a given object contains a given property.

function hasProperty(obj, property) {
    return obj.hasOwnProperty(property);
}

var student = {
    name: 'Gosho',
    age: 20,
    marks: [3.5, 4.5, 6, 5.25]
};

console.log(student);
console.log('has name? --> ' + hasProperty(student, 'name'));
console.log('has age? --> ' + hasProperty(student, 'age'));
console.log('has marks? --> ' + hasProperty(student, 'marks'));
console.log('has gender? --> ' + hasProperty(student, 'gender'));
