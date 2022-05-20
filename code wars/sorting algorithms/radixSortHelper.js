/**
    RADIX SORT HELPERS
    In order to implement radix sort, uts helpful to biuld
    a few helper functions first

    getDigit(num, place) - returns the digit in num at
    the given value

    getDigit(12345,0); // 5
    getDigit(12345,1); // 4
    getDigit(12345,2); // 3
    getDigit(12345,3); // 2
    getDigit(12345,4); // 1
    getDigit(12345,5); // 0


 */

const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/*
    digitCount(num) - returns the num of digits in num
    digitCount(1); // 1
    digitCount(25); // 2
    digitCount(315); // 3

*/

const digitCount = num => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}


/*
    mostDigits(nums) - Given an array of numbers, returns
    the number of digits in the largest numbers in te list

    mostDigits([1234,56,7]); // 4
    mostDigits([1,1,11111,1]); // 5
    mostDigits([12,34,56,78]); // 2

*/

const mostDigits = nums => {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

//console.log(getDigit(7323, 2));
console.log(digitCount(315));