// String
const name1 = 'Jeff';
const name2 = 'Jeff';

console.log(typeof name2);

if (name2 === 'Jeff') {
    console.log('yes');
} else {
    console.log('no');
}


//  Number

const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function(x, y) {
    return x + y;
}

const getSum2 = new Function('x ', 'y', 'return 1 + 1 ');


// Object
const john = { name: "John" };
const john1 = new Object({ name: "John" });

//Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array[1, 2, 3, 4];

// Regular Expessions
// \w repreesents a word characyter
// + means more thn one
const reg1 = /\w+/ //looking word character that occurs more than oncec

const reg2 = new RegExp('\\w+');