/*
takes an array and adds its values
*/

const sum = arr => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {

        total += arr[i];
    }

    return total;
}