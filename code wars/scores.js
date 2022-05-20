const scoreHandler = scores => {

    // sort the given array in a descending order
    const DescSort = scores.sort((a, b) => b - a);
    //console.log(DescSort)

    for (let i = 0; i < DescSort.length; i++) {
        

    }
    // Convert the sorted array to objects
    //const newScores = Object.assign({}, DescSort);
    console.log(n);

    //test for occurence more than once

}

//console.log(scoreHandler([40, 30, 20, 30, 40, 30]));
scoreHandler([40, 30, 20, 30, 40, 30])


// Given an array of integers [40,30,30, 20, 30, 40, 30], you are expected to return an object in a descending order 
//  with they values in the array  as keys and their position as values. if a value in they array has the same value of occurance, 
//  they have to retain the same position. 

//  Example: 
//  input =  [40,30,30, 20, 30, 40, 30]
//  output = {
//      40:1,
//      40:1,
//      30:3,
//      30:3,
//      30:3,
//      30:3,
//      20:7
//  }