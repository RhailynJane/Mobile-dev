const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((num) => num * num);
console.log("Squares: ", squares);
const labeled = numbers.map((num) => `Number: ${num}`);
console.log("Labeled: ", labeled);

const a = [1, 4, 9, 16, 25];
const sr = a.map((num) => Math.sqrt(num));
console.log(sr);

let s = "Geeks";
let res = s.split("").map((item) => item + "A");
console.log(res);
