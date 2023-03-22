const readline = require('readline-sync');
const LETTER_CHOICES = [['r','rock'], ['p','paper'], ['sc','scissors'], ['sp','spock'], ['l','lizard']];
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const VALID_LETTERS = ['r', 'p', 'l', 'sc', 'sp'];
const FULL_WORD = {r : 'rock', p : 'paper', l : 'lizard', sc : 'scissors', sp : 'spock'};
const CONT = {y : true, n : false};

let youWins = 0;
let computerWins = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function incrementYouWin() {
  youWins++;
}

function incrementComputerWin() {
  computerWins++;
}

function displayWinner(choice, computerChoice) {
  if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
      (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
      (choice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock')) ||
      (choice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper'))) {
    prompt(`You chose ${choice} and computer chose ${computerChoice}`);
    prompt('You win round!');
    incrementYouWin();
  } else if (choice === computerChoice) {
    prompt(`You chose ${choice} and computer chose ${computerChoice}`);
    prompt("It's a tie");
  } else {
    prompt(`You chose ${choice} and computer chose ${computerChoice}`);
    prompt('Computer wins round!');
    incrementComputerWin();
  }
}

function validLetters(letter) {
  if (letter.length > 2) {
    return false;
  } else if (letter.length === 1 || letter.length === 2) {
    if (VALID_LETTERS.includes(letter)) {
      return true;
    }
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
  LETTER_CHOICES.forEach(element => {
    console.log(`${element[0]} for ${element[1]}\n`);
  });

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