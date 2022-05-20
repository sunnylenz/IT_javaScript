function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];

        }
    }
    return product;
}

const results = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(results);

//base 2 conversion to decimal
function convertToInt(str) {
    return parseInt(str, 2);
}

console.log(convertToInt(110011));

// Check Equality
const equalityCheck = (a, b) => a == b ? "Equality Confirmed" : "Equality not seen";
console.log(equalityCheck(10, 10));

// CheckSign Function
const checkSign = num => num > 0 ? "Positive" : num == 0 ? "Zero" : "Negative";
console.log(checkSign(-1));

function countDown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countDown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}

console.log(countDown(5));

const rangeOfNumbers = (startNum, endNum) => {
    if (startNum == endNum) {
        return [startNum];
    } else {
        var myArr = rangeOfNumbers(startNum + 1, endNum);
        myArr.unshift(startNum);
        return myArr;
    }
}

console.log(rangeOfNumbers(4, 4));

const obj = {
    x: 4,
    y: 5,
    x: -4
}

console.log(Object.values(obj));

const one = call_two => console.log("step 1 running, call two.");
const two = () => console.log(" Step 2");

one(two());

const order = call_production => {
    console.log("order placed, call production");
    call_production();
}

const production = () => console.log("Order receieved, starting production");

order(production);

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

const user = {
    name: "John Doe", age: 30
}

const { name, age } = user;

class ThermoStat {
    constructor(temp) {
        this.temp = temp;
    }

    get temperature() {
        return 5 / 9 * (this.temp - 32);
    }
    set temperature(updatedTemp) {
        return this.temp = updatedTemp * 9.0 / 5 + 32;
    }
}

const Themos = new ThermoStat(76);
let temp = Themos.temperature;
Themos.temperature = 26;
temp = Themos.temperature;
console.log(temp);

const makeServerRequest = new Promise((resolve, reject) => {
    let res;
    if (res) {
        resolve("we have it");
    } else {
        reject("Data not recieved");
    }
});
