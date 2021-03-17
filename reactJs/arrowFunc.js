// natve way of wrinting functions

function printMyName(name) {
    console.log(name)
}
printMyName('Sunny');
// Arrow functions
const displayMyName = (name) => {
    console.log(name);
}
displayMyName('sunny lenz');
//Arrow function with one arguement is written thus

const printName = name => {
    console.log(name);
}
printMyName('Western Dreams');

//Arrow function with many arguements is written thus
const manyArgument = (name, age) => {
    console.log(name, age);
}
manyArgument('SunnyLenz', 26);
// Arrow function with return keyword is written thus
const multiply = number => {
    return number * 2;
}
console.log(multiply(5));

// Arrow function with return keyword short version
const newMultiply = number => number * 4;

console.log(newMultiply(4));

// Arrow function with no argument is written thus
const noArgument = () => {
    console.log('No Argument');
}
noArgument();