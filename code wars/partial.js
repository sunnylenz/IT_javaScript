const partialkeys = obj => {
    const newObj = {};
    Object.keys(obj).sort().reverse().forEach(key => {
        const value = obj[key];

        for (let i = 0; i < key.length; i++) {
            const newKey = key.substring(0, i + 1);
            newObj[newKey] = value;

        }
    })
    return newObj;
}