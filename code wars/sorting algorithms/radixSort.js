/*
        RADIX SORT PSEUDOCODE
    1. Define a function that accepts list of numbers
    2. Figure out how many digits the largest number has
    3. Loop from k = 0 up to the this largest number of digits
    4. For each iteration of the loop:
        a. Create Buckets for each digit(0-9)
        b. place each number in the corresponding bucket based on
           its kth digit
    5. Replace our existing array with values in our buckets, starting 
       with 0 and going up to 9
    6. Return list at the end
*/

const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}


const digitCount = num => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = nums => {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

const radixSort = nums => {
    let maxDigitCount = mostDigits(nums);
    //console.log(maxDigitCount);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));