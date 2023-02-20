// let loanAmount = 200000;

// let apr = 6.85;

// let loanDuration = 30; // years

const readline = require('readline-sync');

let prompt = (message) => {
  console.log(`=> ${message}`);
};

prompt("Enter loan amount: ");
let loanAmount = readline.question();

while (Number.isNaN(Number(loanAmount))) {
  prompt("Enter loan amount: ");
  loanAmount = readline.question();
}

prompt("Enter APR (%): ");
let apr = readline.question();

while (Number.isNaN(Number(apr))) {
  prompt("Enter APR (%): ");
  apr = readline.question();
}

prompt("Enter loan duration (years): ");
let loanDuration = readline.question();

while (Number.isNaN(Number(loanDuration))) {
  prompt("Enter loan duration (years): ");
  loanDuration = readline.question();
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

console.log(`The monthly payment for a loan amount of $${loanAmount} with ${loanDuration} years duration 
is $${calculateMonthlyPayment(loanAmount, monthlyInterestRate(apr), durationInMonths(loanDuration)).toFixed(2)}`);