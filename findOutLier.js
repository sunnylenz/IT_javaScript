/* 

You are given an array (which will have a length of at least 3, but could 
    be very large) containing integers. The array is either entirely comprised of 
    odd integers or entirely comprised of even integers except for a single integer N.
     Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/


function findOutlier(integers) {
    let oddArray = [];
    let evenArray = [];
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 != 0) {
            oddArray.push(integers[i]);
        } else {
            evenArray.push(integers[i]);
        }
    }

    if (oddArray.length == integers.length - 1) {
        return evenArray[0];
    } else if (evenArray.length == integers.length - 1) {
        return oddArray[0];
    }

}

let result = findOutlier([160, 3, 1719, 19, 11, 13, -21]);
console.log(result);
console.log('second result');

let secondResult = findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
console.log(secondResult);