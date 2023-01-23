// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
let number1 = readline.question();

console.log("What's the second number?");
let number2 = readline.question();

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

switch(operation){
  case "1": 
    console.log(Number.parseInt(number1) + Number.parseInt(number2));
    break;
  case "2": 
    console.log(Number.parseInt(number1) - Number.parseInt(number2));
    break;
  case "3": 
    console.log(Number.parseInt(number1) * Number.parseInt(number2));
    break;
  case "4": 
    console.log(Number.parseInt(number1) / Number.parseInt(number2));
    break;
}