//using Var keyword
var n = 5;
console.log(n);

//reassigning variable is allowed
var n = 20;
console.log(n);

//Using let keyword
let x = 10;
x = 15; //variable can be reassign
// let x = 20; ---> cannot be redeclare; will get error Identifier 'x' has already been declared
console.log(x);

//Using const keyword
const a = 100;
// a = 200; ---> This will throw an error
console.log(a);
