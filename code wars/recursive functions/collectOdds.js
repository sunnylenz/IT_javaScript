const collectOddValues = arr => {
    let result = [];
    const helper = helperInput => {
        if (helperInput.length === 0) {
            return;
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1))
    }
    helper(arr);
    return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//second implementation


const collectOdds = arr => {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOdds(arr.splice(1)));
    return newArr;
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));