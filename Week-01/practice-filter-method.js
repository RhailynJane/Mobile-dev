const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

function canVote(age) {
  return age >= 18;
}

const filtered = [24, 33, 16, 40].filter(canVote);
console.log(filtered);

function isPositive(value) {
  return value > 0;
}
const posNumber = [112, 52, 0, -1, -2].filter(isPositive);
console.log(posNumber);
