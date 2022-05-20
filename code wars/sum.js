/*
Write a function that calculates the sum of all
numbers from 1 up to (and including) some number n.
*/

/*
Solution is to basically create a total variable 
accumulator and loop through all those numbers
and add them in one at a time starting at 1 till n
and in the end return total
*/


// Solution 1
const addUpto = n => {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

//Solution two

const addUp = n => {
    return n * (n + 1) / 2;
}

console.log(addUpto(6));