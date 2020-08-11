function sayHello(message) {
    console.log(message);
}

sayHello('Hello!!');

function sayMyName(myName) {
    console.log('Your name is ' + myName);
}

sayMyName("Sunny Lenz");

function sayProfile(fullname, age, sex, level, location, height) {
    console.log(`My name is  ${fullname }. I am ${age} years old. Sex:${sex} currently in my ${level} and based in ${location}, with height of ${height}`);
}

sayProfile("Madubuike Sunday", "33", "Male", "300 level", "Owerri", "1.7 meters");

function addThreeNumbers(num1, num2, num3) {
    result = num1 + num2 + num3;
    console.log(result);
}

addThreeNumbers(33, 679, 909);

// function expression

let sayHi = function (info) {
    console.log(info);

}

let computeNumbers = function (num, num7) {
    let sum = num - num7;
    console.log(sum);
}

computeNumbers(32,23);
