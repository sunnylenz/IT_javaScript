const firstNonconsecutive = arr => {
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let next = arr[i + 1];

        if (current + 1 !== next) {
            return next;
        }
    }
    return null;
}

console.log(firstNonconsecutive([1, 2, 3, 4, 6, 7]));