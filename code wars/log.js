/*
logs atleats 5 for input(n) less than 5
*/

const logAtLeast5 = n => {
    for (let i = 0; i < Math.max(5, n); i++) {
        console.log(i)
    }
}