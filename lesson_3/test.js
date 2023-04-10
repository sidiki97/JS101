
function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

function factorsUpdated(number, divisor = number, factors = []) {
  if (number <= 0) {
    return factors;

  }
  if (divisor <= 0) {
    return factors;
  }

  if (number % divisor === 0) {
    factors.push(number / divisor);
  }

  divisor -= 1;

  return factors.concat(factorsUpdated(number, divisor));

}

console.log(factors(12));
console.log(factorsUpdated(12));