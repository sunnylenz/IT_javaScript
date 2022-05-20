const noOdds = values => {
    let results = []
    for (let i = 0; i < values.length; i++) {

        if (values[i] % 2 == 0) {
            results.push(values[i]);
        }
    }
    return results;
}

// Using filter array method
const noOdd = values => {
    return values.filter(val => val % 2 === 0);
}

console.log(noOdd([0, 1, 2, 3, 4, 5, 6]));