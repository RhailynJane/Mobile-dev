const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

const a = ["js", "html", "css"];
const res = a.reduce((acc, str) => acc + str.length, 0);
console.log(res);
