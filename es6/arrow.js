const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
]

//es6
const activeJobs = jobs.filter(job => job.isActive);


// es5
jobs.filter(function(job) {
    return job.isActive;
});

//es6
const square = number => number * number;

// es5

const square = function(number) {
    return number * number;
}