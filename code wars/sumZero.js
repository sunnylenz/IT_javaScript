/*
write a function called sumZero which accepts
a sorted array of integers. The function should find
the first pair where the sum is 0. return an array that 
includes both values that sum to zero or undefined if 
a pair does not exist.
*/

//NAIVE SOLUTION
// time complexity = o(n^2)
// space complexity = 0(1)

const sum0 = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}

//console.log(sum0([-4, -3, -2, -1, 0, 1, 2, 5]));


//Multiple Pointer Approach
//Time complexity is o(n) - linear
//Space complexity o(1) - constant 

const sumZero = arr => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
console.log(sumZero[-4, -3, -2, -1, 0, 1, 2, 3, 10]);
