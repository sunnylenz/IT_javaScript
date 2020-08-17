function camelCase(sentence) {
    let newStr = sentence.toLowerCase().split(' ');
    for (let i = 0; i < newStr.length; i++) {
        newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1);

        // console.log(newStr[i])
    }
    return newStr.join(' ');

}

let output = camelCase('here i am waiting foe someone');
console.log(output);