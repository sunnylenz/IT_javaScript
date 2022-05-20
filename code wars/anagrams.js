const validaAnagram = (first, second) => {
    if (first.length !== second.length) {
        return false;
    }

    let lookup = {}

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exist, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }

    }
    return true;
}

console.log(validaAnagram('anagram', 'nagaram'))