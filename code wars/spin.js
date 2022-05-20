const reverseStr = str => str.split('').reverse().join('');
// split the long string by spaces
// map over the words, get the word
//test if the word length is longer than 5
// reverse the word
// orderwise return the word
const spinWords = (lStr) => lStr.split(' ').map(word => (word.length >= 5) ? reverseStr(word) : word).join(' ');
console.log(reverseStr("hello"));
console.log(spinWords("hello, how are you doing. lets have dinner tonight"));

