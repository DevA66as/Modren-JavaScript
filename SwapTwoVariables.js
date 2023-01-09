//JavaScript program to swap two variables Using a Temporary Variable

//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//create a temporary variable
let temp; //We created a temp variable to store the value of a temporarily.

//swap variables
temp = a; //old Value
a = b; 
b = temp; //b taked the old value of a

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

//JavaScript program to swap two variables Using es6(ES2015) Destructuring assignment

//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//using destructuring assignment
[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
//JavaScript program to swap two variables Using Arithmetic Operators
//JavaScript program to swap two variables

//take input from the users
let a = parseInt(prompt('Enter the first variable: '));
let b = parseInt(prompt('Enter the second variable: '));

// addition and subtraction operator
a = a + b;
b = a - b;
a = a - b;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
//JavaScript program to swap two variables Using Bitwise XOR operator
let a = prompt('Enter the first variable: '); //1
let b = prompt('Enter the second variable: ');//2

// XOR operator
a = a ^ b // 001 XOR 010 => a=011
b = a ^ b // 011 XOR 010 => b=001
a = a ^ b//  011 XOR 001 => a=010

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

