function firstNonConsecutiveArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let currentArray = arr[i];
        let nextArray = arr[i + 1];

        if (currentArray + 1 !== nextArray) {
            return (nextArray);
        }

    }
    return null;

}

let nextArray = firstNonConsecutiveArray([1, 2, 3, 4, 5, 6, 7]);
console.log(nextArray);