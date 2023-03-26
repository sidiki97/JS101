const readline = require('readline-sync');
const FULL_WORD = {r : 'rock', p : 'paper', l : 'lizard', sc : 'scissors', sp : 'spock'};
const VALID_LETTERS = Object.keys(FULL_WORD);
const VALID_CHOICES = Object.values(FULL_WORD);
const CONT = {y : true, n : false};

let youWins = 0;
let computerWins = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
      (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
      (choice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock')) ||
      (choice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper'))) {
    prompt(`You chose ${choice} and computer chose ${computerChoice}`);
    prompt('You win round!');
    youWins++;
  } else if (choice === computerChoice) {
    prompt(`You chose ${choice} and computer chose ${computerChoice}`);
    prompt("It's a tie");
  } else {
    prompt(`You chose ${choice} and computer chose ${computerChoice}`);
    prompt('Computer wins round!');
    computerWins++;
  }
}

function validLetters(letter) {
  if (VALID_LETTERS.includes(letter)) {
      return true;
    }
  return false;
}

function winnerOfGame() {
  if (computerWins === 3 || youWins === 3) {
    return true;
  }
  return false;
}

let keepGoing = 'y';

prompt("Welcome to Rock, Paper, Scissors, Spock, Lizard Game!\n");

while (CONT[keepGoing]) {

  prompt("Choose one:\n");
  for (const pick in FULL_WORD) {
    console.log(`${pick} for ${FULL_WORD[pick]}\n`);
  }

  let choice = readline.question();

  while (!validLetters(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(FULL_WORD[choice], computerChoice);

  if (winnerOfGame()) {
    if (computerWins > youWins) {
      console.log('Computer wins the game!');
    } else {
      console.log('You win the game!');
    }
    prompt('Do you want to play again (y/n)?');
    let answer = readline.question().toLowerCase();

    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }

    keepGoing = answer;

    if (keepGoing === 'y') {
      computerWins = 0;
      youWins = 0;
    }
  }

}