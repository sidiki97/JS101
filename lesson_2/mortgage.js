// let loanAmount = 200000;

// let apr = 6.85;

// let loanDuration = 30; // years

const readline = require('readline-sync');

let prompt = (message) => {
  console.log(`=> ${message}`);
};

function isInvalidNumber(number) {
  return number.length === 0 ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

function durationInMonths (duration) {
  return duration * 12;
}

let monthlyInterestRate = (annualRate) => {
  return (annualRate / 100) / 12;
};

function calculateMonthlyPayment (loanAmount, monthlyRate, duration) {
  let monthlyPayment = loanAmount *
                      monthlyRate /
                      (1 - Math.pow((1 + monthlyRate), (-duration)));
  return monthlyPayment;
}

prompt("Welcome to Mortgage Calculator");

let current = {y : true, n : false};
let pick = 'y';

while (current[pick]) {

  prompt("Enter loan amount: ");
  let loanAmount = readline.question();

  while (isInvalidNumber(Number(loanAmount))) {
    prompt("Enter loan amount: ");
    loanAmount = readline.question();
  }

  prompt("Enter APR (%): ");
  let apr = readline.question();

  while (isInvalidNumber(Number(apr))) {
    prompt("Enter APR (%): ");
    apr = readline.question();
  }

  prompt("Enter loan duration (years): ");
  let loanDuration = readline.question();

  while (isInvalidNumber(Number(loanDuration))) {
    prompt("Enter loan duration (years): ");
    loanDuration = readline.question();
  }

  console.log(`The monthly payment for a loan amount of $${loanAmount} with ${loanDuration} years duration 
  is $${calculateMonthlyPayment(loanAmount, monthlyInterestRate(apr), durationInMonths(loanDuration)).toFixed(2)}`);

  prompt("Another calculation?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  pick = answer[0];
}