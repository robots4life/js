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
// SPREAD
// +++++++++++++++++++++++++++++++++++++++++++++
console.log('+++++++++++++++++++++++++++++++++++++++++++++');
// Spread 1. Add the newNumber to the numberStore

let numberStore = [0, 1, 2];
const newNumber = 43;
numberStore = [...numberStore, newNumber];

console.log('SPREAD 1. Add the newNumber to the numberStore');
console.log(numberStore);
console.log('--------');

// Spread 2. Log all elements of the characters array
//

function logSpread(...element) {
    console.log(element);
}

console.log('SPREAD 2. Log all elements of the characters array');
logSpread(...characters);
console.log('--------');

// 3. Add an ID property with a random ID to each of the characters creating a new charactersWithId array
// https://eslint.org/docs/rules/no-param-reassign#props
/* eslint no-param-reassign: ["error", { "props": false }] */
// https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unsupported-features/es-syntax.md
// spread syntax supported since Node 8.3.0
// so this below needs to be in package.json
/* 
    "engines": {
        "node": ">=8.3.0"
    },
*/
function addIdToCharacter(element) {
    const newId = { id: Math.floor(Math.random() * 10000) };
    return { ...element, ...newId };
}
const charactersWithId = characters.map(addIdToCharacter);

console.log('SPREAD 3. Add an ID property with a random ID to each of the characters creating a new charactersWithId array');
console.log(charactersWithId);
console.log('--------');
