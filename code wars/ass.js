// const sumOfArr = numbers => {
//     let result = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         result = result + numbers[i]
//     }
//     return result;
// }

// const check = sumOfArr([1, 5.2, 4, 0, -1]);
// console.log(check);


// // other solutions

// // function sum(numbers) {
// //     return numbers.reduce((a, b) => a + b, 0);
// //   }


// // Parse String to number
// const stringToNumber = str => {
//     result = parseInt(str);
//     return result;
// }
// // another method
// var stringToNumber1 = function (str) {
//     return +str;
// }

// const stringToNumber2 = str => Number(str)


// //Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
// //For example:
// //solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// //solution(null); // should return []




// const num = stringToNumber("222");
// console.log(num)


// function solution(nums) {
//     if (nums == null || nums == []) {
//         return []
//     } else {
//         return nums.sort(function (a, b) {
//             return a - b;
//         })
//     }

// }

// function solution1(nums) {
//     return (nums || []).sort(function (a, b) {
//         return a - b
//     });
// }

// function solution2(nums) {
//     return nums !== null ? nums.sort(function (a, b) { return a - b }) : [];
// }
// console.log(solution([1, 2, 10, 50, 5])); // should return [1,2,5,10,50]

// //solution(null); // should return []
// //Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// //Examples
// //"This is an example!" ==> "sihT si na !elpmaxe"
// //"double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
//     // Go for it
//     result = str.split('').reverse().join('');
//     return result.split(' ').reverse().join(' ');
// }


// function reverseWord(str) {
//     // Go for it
//     let arrWords = str.split(' ')
//     console.log(arrWords)
//     let temp = arrWords.map(word => word.split('').reverse().join(''));
//     console.log(temp)

//     return temp.join(' ')
// }

// console.log(reverseWords("a b c d"));
// // first method
// const sumTwoSmallest = numbers => {
//     const sorted = numbers.sort((a, b) => a - b);
//     console.log(sorted);
//     for (let i = 0; i < sorted.length; i++) {
//         return sorted[i] + sorted[i + 1];

//     }
// };
// console.log(sumTwoSmallest([5, 7, 1, 8, 11, 55, 3]));

// //second method
// const sumTwoSmallestN = numbers => {

//     // array destructuring
//     const [first, second] = numbers.sort((a, b) => a - b);
//     return first + second;
// }
// //mem.dev     

// const sumOfSM = numbers => {
//     numbers = numbers.sort((a, b) => a - b);
//     return numbers[0] + numbers[1];
// }

// // vowels count
// const getCount = str => {
//     let vowelsCount = 0;

//     for (const letter of str) {
//         if (letter.match(/[aeiou]/g)) {
//             vowelsCount++;
//         }
//     }

//     return vowelsCount;
// }

// console.log(getCount("abracadabra"));

// const loaddedBus = busStops => {
//     let totalPassengers = 0;
//     for (let i = 0; i < busStops.length; i++) {

//         let currentBusStop = busStops[i];
//         let getOnPassengers = currentBusStop[0];
//         let outBoundPassengers = currentBusStop[1];
//         totalPassengers += getOnPassengers;
//         totalPassengers -= outBoundPassengers;

//     }
//     return totalPassengers;

// }





// //Alternative
// const number = (busStops) => busStops.reduce((people, [gotIn, gotOff]) => people + gotIn - gotOff, 0);

// console.log(number([[10, 0], [3, 5], [5, 8]]))

// const smallEnough = (a, limit) => {
//     let maxVal = Math.max(...a);
//     if (maxVal <= limit) {
//         return true
//     } else {
//         return false
//     }
// }
// //Shorter version
// function smallEnough1(a, limit) {
//     return Math.max(...a) <= limit
// }
// //other method
// smallEnough2 = (a, l) => a.every(e => e <= l)

// console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));


// const solution = (str, ending) => {
//     // TODO: complete
//     let strchar = str.substr(-1, 3);
//     let endchar = ending.substr(-1, 3);
//     let lastChar = str.charAt(str.length - 1);
//     let last = ending.charAt(ending.length - 1);

//     if (strchar.endsWith(endchar) || lastChar.endsWith(last)) {
//         return true;
//     } else {
//         return false;
//     }
// }

//better solution

// const solution = (str, ending) => {
//     // TODO: complete
//     return str.endsWith(ending);
// }

// console.log(solution('abcde', 'abc'));


// const squareDigits = num => {

//     let stringifiedNum = String(num);
//     let result = "";
//     for (let i = 0; i < stringifiedNum.length; i++) {
//         squaredNum = parseInt(stringifiedNum[i]) * parseInt(stringifiedNum[i]);
//         result = result + String(squaredNum);
//     }
//     return parseInt(result);
// }

// method two
// const squareDigits = (num) => Number((num + '').split("").map(c => c *c).join(""));

// function squareDigits(num) {
//     let numStr = String(num);
//     let res = '';

//     for (let i of numStr) {
//         res += Math.pow(Number(i), 2);
//     }

//     return Number(res);
// }

// console.log(squareDigits(9119));


//Binary conversion

// function addBinary(a, b) {
//     return (a + b).toString(2);
// }


// const rowSumOfOddNumbers = n => {
//     let firstDigit = (n * n) - (n - 1);
//     let answer = 0;
//     let count = 0;

//     while (count < n) {
//         if (firstDigit % 2 !== 0) {
//             answer += firstDigit;
//             count++;
//         }
//         firstDigit++;
//     }
//     return answer;
// }

// console.log(rowSumOfOddNumbers(1));

// const rowSumOddNumbers = n => Math.pow(n, 3);
// console.log(rowSumOddNumbers(3));

// const isTriangle = (a, b, c) => {
//     if (a == 0 || b == 0 || c == 0) {
//         return false;
//     } else if (a + b <= c) {
//         return false;
//     } else if (c + b <= a) {
//         return false;
//     } else if (a + c <= b) {
//         return false;
//     }
//     return true;
// }

// function isTriangle(a,b,c)
// {
//    return a + b > c && a + c > b && c + b > a;
// }

// console.log(isTriangle(7, 2, 2));

// a more intelligent way of getting count of vowels 
const getCount = str => (str.match(/[aeiou]/gi) || []).length;
console.log(getCount('abracadabra'));