// easily extract arrayelements or object properties and store them in variables
// it allow u to pull out single element or property and store them in a new variable

//Array destructuring


// [a,b]=['hello','sunny']
//console.log(a)-----hello
//console.log(b).....sunny

//Object destructuring


// {name}={name:'Sunny', age:28}
// console.log(name)...Sunny
// console.log(age)....undefined

// Destructuring in practice

const numbers = [1, 2, 3, ];
[num1, num2] = numbers;
console.log(num1);
console.log(num2);

// to pull 3
const number = [1, 2, 3, ];
[num1, , num3] = numbers;
console.log(num1);
console.log(num3);