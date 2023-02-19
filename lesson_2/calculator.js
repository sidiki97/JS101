// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

console.log('Welcome to Calculator!');

function prompt (message) {
  console.log(`=> ${message}`);
}

prompt("What's the first number?");
let number1 = readline.question();

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = readline.question();
}

prompt("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number2 = readline.question();
}

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}

switch (operation) {
  case "1":
    console.log(Number(number1) + Number(number2));
    break;
  case "2":
    console.log(Number(number1) - Number(number2));
    break;
  case "3":
    console.log(Number(number1) * Number(number2));
    break;
  case "4":
    console.log(Number(number1) / Number(number2));
    break;
}