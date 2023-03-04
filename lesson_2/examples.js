// let myVar = [1];

// function myFunc(myVar) {
//   myVar = [2];
// }

// myFunc();
// console.log(myVar); // [1]

// function test() {
//   prompt();
//   console.log(word);
// }

// let word = "how?";
// let b = "yo";
// test(b);

// function prompt() {
//   console.log('Test');
// }

let words = ['scooby', 'do', 'on', 'channel', 'two'];

words.forEach(word => {
  console.log(word);
  words.shift();
});

console.log(words); // logs ['channel', 'two']