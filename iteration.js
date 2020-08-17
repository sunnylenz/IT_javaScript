for (let i = 0; i < 10; i++) {

    console.log("print sir chima");
}
let stop=0;

function printTimeTable(num, noOfTimes, value) {
    for (let index = value; index < noOfTimes + 1; index = index + value) {
        let result = num * index;

        console.log(`${num} * ${index} = ${result}`);

    }
}

printTimeTable(5, 20, 2);

let names = ['Amadi', 'Austin', 'Lenz', 'Sunny', 'Rejoice'];
for (let index = 0; index < names.length; index++) {
    console.log(names[index]);

}

console.log('using for each loop');
console.log('===================================');
names.forEach(function (name) {
    if (name == 'Lenz') {
        console.log(`${name} is a developer`);
    }
    // console.log(name);
});


console.log('using for while loop');
console.log('===================================');

let m = 0;
while (m < 4) {

    console.log('using for each loop testing fro while');
    console.log('===================================');
    m++;

}

// 