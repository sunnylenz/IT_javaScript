const first = [1, 2, 3];
const second = [4, 5, 6];


// es5
const combined = first.concat(second);

// es6

const combined = [...first, 'a', ...second, 'b']


const obj1 = {
    name: "Mosh"
}

const obj2 = {
    job: "Instructor"
}

const mix = {...obj1, ...obj2, location: "Australia" }


// cloning the first object

const clone = {...obj1 }