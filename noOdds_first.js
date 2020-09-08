function noOdds(value) {
    let newArray = [];
    for (let i = 0; i < value.length; i++) {
        if (value[i] % 2 == 0) {
            newArray.push(value[i]);
        }

    }

    return newArray;
}

let result = noOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(result);

// Better Method...matured method,,,,,

function noOddsHere(arr) {
    return arr.filter(val => val % 2 === 0);

}


// filter((val)=>{
//    return val % 2 === 0;
// })

let newval = noOddsHere([0, 2, 3, 5, 6, 78, 8, 8, 9, 9, ]);
console.log(newval);

function noOddsADV(values) {
    function isEven(num) {
        return num % 2 === 0;
    }
    return values.filter(isEven);
}

let filterR = noOddsADV([12, 13, 14, 15, 16, 17, 19, 19, 37, 13, 13, 166]);
console.log(filterR);