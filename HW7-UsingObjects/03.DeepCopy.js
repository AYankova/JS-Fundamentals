//Write a function that makes a deep copy of an object.
//The function should work for both primitive and reference types.

function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    var clonedObj = {};

    for (var indElement in obj) {
        clonedObj[indElement] = deepCopy(obj[indElement]);
    }

    return clonedObj;
}

var obj = {
        name: 'Ivan',
        age: 25,
        luckyNumbers: [3, 7, 11, 19, 22],
        girlfriends: {
            'Asya': 20,
            'Ina': 22,
            'Katya': 19,
        }
    },
    cloned = deepCopy(obj);

console.log(obj.name);
obj.name = 'Pesho';
console.log(cloned.name);
console.log(obj.name);

console.log('\nOriginal:');
console.log(obj.luckyNumbers[0]);
obj.luckyNumbers[0] = 2;
console.log('This is changed:');
console.log(obj.luckyNumbers[0]);
console.log('This is not changed:');
console.log(cloned.luckyNumbers[0]);
