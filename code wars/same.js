/*
write a function called same which accepts two arrayus
the function should return true if every value in 
array has its corresponding value squared in the second array
the frequency of the values must be the same
*/


// Naive implementation

/*
HOW IT WORKS
the idea is we have two arrays
the approach is to test if the two arrays have different lengths

in the next line,we loop over the first array,
we call indexOf where we pass in the square of each value
sort of asking whats the index of 1 squared in array2 
we check if its negative one,meaning its absent in the array2
and we return false
 

*/
const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {

        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
        /*
        The splice() method can be used to add new items to an array:
        first parameter (correctIndex) defines the position where new elements should be added 
        The second parameter (1) defines how many elements should be removed.
        
        */
    }
    return true;
}
//Refactored solution

const same_refac = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        /**
        for each value in the first array, we increment by one 
        to the frequency counter if its there or we initialize 
        to one if its not
         */
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;

    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        /* 
        we loop over thr first array,and look at each key
        and check if its squared and if it is a key in frequency counter2

    
        */

        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        /* 
        we check if the values correspond
        */
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

console.log(same_refac([1, 2, 3], [1, 4, 9]))