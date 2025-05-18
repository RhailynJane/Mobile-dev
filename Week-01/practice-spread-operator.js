//Adding Multiple Elements Using Spread Operator
let a = [10, 20];
let b = [...a, 30, 40];
let c = [50, ...b, 60];
console.log(a);
console.log(b);
console.log(c);

//Find Min / Max using Spread Operator
console.log(Math.min(c));

//Using spread
console.log(Math.min(...c));

// Passing Array Elements as Function Parameters
function add(x, y, z) {
  return x + y + z;
}
const d = [10, 20, 30];
console.log(add(...d));

const getSum = (x, y, z) => x + y + z;
console.log(getSum(...d));

// Copying Array using Spread
const e = [...d];
console.log(e);

// Concatenate Arrays using Spread Operator
const combined = [...d, ...e];
console.log(combined);

// Working of Objects with Spread Operator
const user = {
  name: "Rhai",
  age: 28,
};

const cloneUser = { ...user };
console.log(cloneUser);
