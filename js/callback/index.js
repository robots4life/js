const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];
// +++++++++++++++++++++++++++++++++++++++++++++
// CALLBACK
// +++++++++++++++++++++++++++++++++++++++++++++
console.log('+++++++++++++++++++++++++++++++++++++++++++++');
const haveFun = function beingFunny() {
    console.log('This is fun');
};
console.log('A variable haveFun is assigned a function and called');
haveFun();
console.log('--------');

console.log('+++++++++++++++++++++++++++++++++++++++++++++');
// Callback 1. Call function sayHello as an argument of function greetPerson
// - log the function calls

function sayHello() {
    console.log('sayHello function greets you');
}

function greetPerson(person) {
    console.log('greetPerson function invokes the greeting');
    person();
}

console.log('CALLBACK 1. Call function sayHello as an argument of function greetPerson');
console.log(' - log the function calls');
greetPerson(sayHello);
console.log('--------');

// 2. Call function sayWelcome as an argument of function greetGuest
// - return the sayWelcome function value

function sayWelcome() {
    return 'sayWelcome function greets you';
}

function greetGuest(welcome) {
    return welcome();
}

const greeting = greetGuest(sayWelcome);
console.log('CALLBACK 2. Call function sayWelcome as an argument of function greetGuest');
console.log(' - return the sayWelcome function value');
console.log(greeting);
console.log('--------');

// Callback 3. Call function sayBye as an argument of function farwellPerson
// - return both the sayBye and the farwellPerson function values

function sayBye() {
    return 'sayBye function says goodbye';
}

function farewellPerson(bye) {
    function helper() {
        console.log('farewellPerson function invokes the farewell');
        return bye();
    }
    return helper();
}

console.log('CALLBACK 3. Call function sayBye as an argument of function farwellPerson');
console.log(' - return both the sayBye and the farwellPerson function values');
const farewell = farewellPerson(sayBye);
console.log(farewell);
console.log('--------');

// Callback 4. Call function sayByeAgain as an argument of function farewellPersonAgain
// - return both the sayByeAgain and the farewellPersonAgain function values
// - return the number of times farewellPersonAgain has been called

function sayByeAgain() {
    return 'sayBye function says goodbye';
}

function farewellPersonAgain(bye) {
    let numCalled = 0;

    function helper() {
        numCalled += 1;
        console.log(`farewellPersonAgain called ${numCalled} time(s)`);

        console.log('farewellPersonAgain function invokes the farewell');
        return bye();
    }
    return helper;
}

console.log('CALLBACK 4. Call function sayByeAgain as an argument of function farewellPersonAgain');
console.log('- return both the sayByeAgain and the farewellPersonAgain function values');
console.log('- return the number of times farewellPersonAgain has been called');
const farewellAgain = farewellPersonAgain(sayByeAgain);
console.log(farewellAgain());
console.log(farewellAgain());
console.log('--------');

// +++++++++++++++++++++++++++++++++++++++++++++
// MAP
// +++++++++++++++++++++++++++++++++++++++++++++

console.log('+++++++++++++++++++++++++++++++++++++++++++++');
// Map 1. Get array of first character of all names
function getFirstCharOfName(element) {
    return element.name.substring(0, 1);
}

const firstCharOfNames = characters.map(getFirstCharOfName);

console.log('MAP 1. Get array of first character of all names');
console.log(firstCharOfNames);
console.log('--------');

// +++++++++++++++++++++++++++++++++++++++++++++
// FOREACH
// +++++++++++++++++++++++++++++++++++++++++++++
console.log('+++++++++++++++++++++++++++++++++++++++++++++');
// forEach 1. Change character name to only have the first 3 characters.

// https://eslint.org/docs/rules/no-param-reassign
/* eslint no-param-reassign: ["error", { "props": false }] */

function mutateCharacterName(element) {
    element.name = element.name.substring(0, 3);
}
characters.forEach(mutateCharacterName);

console.log('FOREACH 1. Change character name to only have the first 3 characters.');
console.log(characters[0].name);
console.log(characters[1].name);
console.log(characters[2].name);
console.log(characters[3].name);
console.log('--------');

// +++++++++++++++++++++++++++++++++++++++++++++
// CALLBACK
// +++++++++++++++++++++++++++++++++++++++++++++
