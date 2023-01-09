// syntax==>  Math.random() * (highestNumber - lowestNumber + 1) + lowestNumber
// generating a random number (double numbers)
const a = Math.random() * (10-2+1) + 1
console.log(`Random value between 1 and 10 is ${a}`);
// generating a random number (integer)
const a = Math.floor(Math.random() * (10 - 3 + 1)) + 1;
console.log(`Random value between 1 and 10 is ${a}`);
