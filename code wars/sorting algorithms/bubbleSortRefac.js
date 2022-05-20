//Better implementation of bubble sort

const bubbleSortRefact = arr => {
    for (let i = arr.length; i > 0; i--) {
        //console.log(i)
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSortRefact([37, 45, 8, 29]));