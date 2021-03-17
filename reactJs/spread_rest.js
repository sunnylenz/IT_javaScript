//Spread operator is used to split up array elements or object properties
// for example

// const newArray=[...oldArray,1,2]
// const newObject = {...old Object, new Prop: 5 }

// Rest operator is same with spread operator but used differently. it is used to mere a list of function arguemens into an array

// function sortArgs(...args){return args.sort()}

// Spread operators for arrays
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);
// Spread operators for objects
const person = {
    name: 'Sunny'
};

const newPerson = {
    ...person,
    age: 28
}
console.log(newPerson);
// Rest operator
const fillter = (...args) => {
    return args.filter(el => el === 1);
}
console.log(fillter(1, 2, 3))