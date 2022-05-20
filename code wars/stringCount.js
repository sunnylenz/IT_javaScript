/*
write a function that takes in a string and returns
counts of each character in the string
*/

/*
const charCount = str => {
    let result = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        //takes up a lot of space to do a simple thing
        if (result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1;
        }

    }
    return result;
}

*/

const charCount = str => {
    let obj = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (isAlphaNumeric(char)) {// checks if  string is a letter or number.  

            /*
            obj[char] takes a character and
            and access the corresponding value in our object.
            if it is truthy (= ++obj[char]), we add 1 to it 
            and if theres nothing in there, we set the value to one( || 1);
            */
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

const isAlphaNumeric = char => {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && //numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A_Z)
        !(code > 96 && code < 123)) { //loer alpha (a-z)
        return false;
    }
    return true;
}

console.log(charCount("hello"));