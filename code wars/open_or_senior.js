// Categorize new Member 

const openOrSeniorI = data => {
    data.map((info) => {
        if (info[0] >= 55 && info[1] > 7) {
            return "Senior";
        } else {
            return "Open";
        }
    });
}

//Another way
const openOrSenior = data => data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? 'Senior' : 'Open');

// Dubstep
const songDecoder = song => song.replace(/(WUB)+/g, " ").trim();

const sumTwoSmallestNumbers = numbers => {
    const [firstNumber, secondNumber] = numbers.sort((a, b) => a - b);
    return firstNumber + secondNumber;
}