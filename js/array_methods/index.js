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
// MAP
// +++++++++++++++++++++++++++++++++++++++++++++

console.log('+++++++++++++++++++++++++++++++++++++++++++++');
// Map 1. Get array of all names
const allNames = characters.map((element) => {
    return element.name;
});
console.log('Map 1. Get array of all names');
console.log(allNames);
console.log('--------');

// Map 2. Get array of all heights
const allHeights = characters.map((element) => {
    return element.height;
});
console.log('Map 2. Get array of all heights');
console.log(allHeights);
console.log('--------');

// Map 3. Get array of objects with just name and height properties
const allNamesHeights = characters.map((element) => {
    return { name: element.name, height: element.height };
});
console.log(' Map 3. Get array of objects with just name and height properties');
console.log(allNamesHeights);
console.log('--------');

// Map 4. Get array of all first names
const allFirstNames = characters.map((element) => {
    return element.name.split(' ')[0];
});
console.log('Map 4. Get array of all first names');
console.log(allFirstNames);
console.log('--------');
console.log('');

// +++++++++++++++++++++++++++++++++++++++++++++
// REDUCE
// +++++++++++++++++++++++++++++++++++++++++++++

console.log('+++++++++++++++++++++++++++++++++++++++++++++');
// REDUCE 1. Get total mass of all characters
const totalMass = characters.reduce((accumulator, currentElement) => {
    return accumulator + currentElement.mass;
}, 0);
// 0 here is the start of the sum of the mass, it is the start of the accumulator, so let's start with 0
console.log('REDUCE 1. Get total mass of all characters');
console.log(totalMass);
console.log('--------');

// REDUCE 2. Get total height of all characters
const totalHeight = characters.reduce((accumulator, currentElement) => {
    return accumulator + currentElement.height;
}, 0);
console.log('REDUCE 2. Get total height of all characters');
console.log(totalHeight);
console.log('--------');

// REDUCE 3. Get total number of characters by eye color
const totalEyeColor = characters.reduce((accumulator, currentElement) => {
    if (accumulator[currentElement.eye_color]) {
        accumulator[currentElement.eye_color] = accumulator[currentElement.eye_color] + 1;
    } else {
        accumulator[currentElement.eye_color] = 1;
    }
    return accumulator;
}, {});
console.log('REDUCE 3. Get total number of characters by eye color');
console.log(totalEyeColor);
console.log('--------');

const totalEyeColorShorterVersion = characters.reduce((accumulator, currentElement) => {
    const color = currentElement.eye_color;

    if (accumulator[color]) {
        accumulator[color]++;
    } else {
        accumulator[color] = 1;
    }
    return accumulator;
}, {});
console.log('REDUCE 3. Get total number of characters by eye color - shorter version');
console.log(totalEyeColorShorterVersion);
console.log('--------');

// REDUCE 4. Get total number of characters in all the character names
const totalCharsNames = characters.reduce((accumulator, currentElement) => {
    return accumulator + currentElement.name.length;
}, 0);
console.log('REDUCE 4. Get total number of characters in all the character names');
console.log(totalCharsNames);
console.log('--------');
console.log('');

// +++++++++++++++++++++++++++++++++++++++++++++
// FILTER
// +++++++++++++++++++++++++++++++++++++++++++++

console.log('+++++++++++++++++++++++++++++++++++++++++++++');
// Filter 1. Get characters with mass greater than 100
const filterMassGreaterThan100 = characters.filter((element) => {
    return element.mass > 100;
});
console.log('Filter 1. Get characters with mass greater than 100');
console.log(filterMassGreaterThan100);
console.log('--------');

// Filter 2. Get characters with height less than 200
const filterHeightLessThan200 = characters.filter((element) => {
    return element.height < 200;
});
console.log('Filter 2. Get characters with height less than 200');
console.log(filterHeightLessThan200);
console.log('--------');

// Filter 3. Get all male characters
const filterAllMale = characters.filter((element) => {
    return element.gender === 'male';
});
console.log('Filter 3. Get all male characters');
console.log(filterAllMale);
console.log('--------');

// Filter 4. Get all female characters
const filterAllFemale = characters.filter((element) => {
    return element.gender === 'female';
});
console.log('// Filter 4. Get all female characters');
console.log(filterAllFemale);
console.log('--------');
console.log('');

// +++++++++++++++++++++++++++++++++++++++++++++
// SORT
// +++++++++++++++++++++++++++++++++++++++++++++

console.log('+++++++++++++++++++++++++++++++++++++++++++++');
// SORT 1. Sort by mass
const sortByMass = characters.sort((a, b) => {
    return a.mass - b.mass;
});
console.log('SORT 1. Sort by mass');
console.log(sortByMass);
console.log('--------');

// SORT 2. Sort by height
const sortByHeight = characters.sort((a, b) => {
    return a.height - b.height;
});
console.log('SORT 2. Sort by height');
console.log(sortByHeight);
console.log('--------');

// SORT 3. Sort by name
const sortByFirstName = characters.sort((a, b) => {
    // return console.log(a.name + ' ' + b.name);
    // return b.name;
    if (a.name < b.name) return -1;
    return 1;
});
console.log('SORT 3. Sort by name');
console.log(sortByFirstName);
console.log('--------');

// SORT 4. Sort by gender
const sortByGender = characters.sort((a) => {
    if (a.gender === 'female') return -1;
    return 1;
});
console.log('SORT 4. Sort by gender');
console.log(sortByGender);
console.log('--------');

// SORT 5. Sort by last name
const sortByLastName = characters.sort((a, b) => {
    if (a.name.split(' ')[1] < b.name.split(' ')[1]) return -1;
    return 1;
});
console.log('SORT 5. Sort by last name');
console.log(sortByLastName);
console.log('--------');

// SORT 6. Sort by last name and height
const sortByLastNameHeight = characters.sort((a, b) => {
    if (a.name.split(' ')[1] < b.name.split(' ')[1] && a.height < b.height) return -1;
    return 1;
});
console.log('SORT 6. Sort by last name and height');
console.log(sortByLastNameHeight);
console.log('--------');
console.log('');

// +++++++++++++++++++++++++++++++++++++++++++++
// EVERY
// +++++++++++++++++++++++++++++++++++++++++++++

console.log('+++++++++++++++++++++++++++++++++++++++++++++');
// EVERY 1. Does every character have blue eyes?
const everyBlueEyes = characters.every((element) => {
    return element.eye_color === 'blue';
});
console.log('EVERY 1. Does every character have blue eyes?');
console.log(everyBlueEyes);
console.log('--------');

// EVERY 2. Does every character have mass more than 40?
const everyMassMoreThan40 = characters.every((element) => {
    return element.mass > 40;
});
console.log('EVERY 2. Does every character have mass more than 40?');
console.log(everyMassMoreThan40);
console.log('--------');

// EVERY 3. Is every character shorter than 200?
const everyCharShorterThan200 = characters.every((element) => {
    return element.height < 200;
});
console.log('EVERY 3. Is every character shorter than 200?');
console.log(everyCharShorterThan200);
console.log('--------');

// EVERY 4. Is every character male?
const everyCharMale = characters.every((element) => {
    return element.gender === 'male';
});
console.log('EVERY 4. Is every character male?');
console.log(everyCharMale);
console.log('--------');
console.log('');

// +++++++++++++++++++++++++++++++++++++++++++++
// SOME
// +++++++++++++++++++++++++++++++++++++++++++++

console.log('+++++++++++++++++++++++++++++++++++++++++++++');
// SOME 1. Is there at least one male character?
const atLeastOneMale = characters.some((element) => {
    return element.gender === 'male';
});
console.log('SOME 1. Is there at least one male character?');
console.log(atLeastOneMale);
console.log('--------');

// SOME 2. Is there at least one character with blue eyes?
const atLeastOneBlueEyes = characters.some((element) => {
    return element.eye_color === 'blue';
});
console.log('SOME 2. Is there at least one character with blue eyes?');
console.log(atLeastOneBlueEyes);
console.log('--------');

// SOME 3. Is there at least one character taller than 210?
const atLeastOneTaller210 = characters.some((element) => {
    return element.height > 210;
});
console.log('SOME 3. Is there at least one character taller than 210?');
console.log(atLeastOneTaller210);
console.log('--------');

// SOME 4. Is there at least one character that has mass less than 50?
const atLeastOneMassLess50 = characters.some((element) => {
    return element.mass < 50;
});
console.log('SOME 4. Is there at least one character that has mass less than 50?');
console.log(atLeastOneMassLess50);
console.log('--------');
