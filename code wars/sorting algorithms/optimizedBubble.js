//Better implementation of bubble sort

const optimizedBubbleSort = arr => {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        //console.log(i)
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) {
            break;
        }
    }
    return arr;
}

console.log(optimizedBubbleSort([5, 1, 2, 3, 4,]));