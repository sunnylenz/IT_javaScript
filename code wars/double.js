/*

takes an array
makes a new array
loops over the length of the first array
multiplys each item and pushes it to the new array
and finnally returns new array
*/

const double = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {

        newArr.push(2 * arr[i]);
    }

    return newArr;
}