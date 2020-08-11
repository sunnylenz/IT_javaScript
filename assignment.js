function voteEligibility(age) {
    if (age < 18) {
        console.log('sorry, you are under aged...Only candidates above 18 are eligible');
    }
    else if (age >= 18 && age <= 80) {
        console.log('hurray, you are qualified');
    }

    else {
        console.log('sorry, you are dead by now');
    }
}

voteEligibility(75);



console.log('assignment using case');

function printName(name) {
    switch (name) {
        case 'Sunny':
            console.log(name);
            break;

        case 'Lenz':
            console.log(name);
            break;


        default:
            console.log('invalid match');
            break;
    }
}
printName('chibuike');

// write a funtion that will convert any numbers in minutes to seconds and one to convert from in hours to minutes..




console.log('converting from minutes to seconds');

function secondsConverter(mins) {
    seconds = mins * 60;
    console.log(`the value of ${mins} in seconds is ${seconds}secs`);

}

secondsConverter(20);


console.log('converting from hours to minutes');

function minuteConverter(hours) {
    minutes = hours * 60;
    console.log(`the value of ${hours}hours in minutes is  ${minutes}minutes`);
}

minuteConverter(2);