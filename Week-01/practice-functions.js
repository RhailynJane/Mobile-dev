//Example1
const greet = function (name) {
  return "Hello " + name;
};

const myName = "Rhai";
const greetMe = greet(myName);
console.log(greetMe);

//Example2
function sum(x, y) {
  return x + y;
}
console.log(sum(6, 9));

//Example3
function welcomeMsg(name) {
  return "Hello " + name + ", Welcome!";
}

let nameVal = "User";
console.log(welcomeMsg(nameVal));

//Example4
const mul = function (x, y) {
  return x * y;
};
console.log(mul(4, 5));

//Example5
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
const a2 = a.map(function (s) {
  return s.length;
});
console.log("Normal Way: ", a2);

//Using Arrow Function
const a3 = a.map((s) => s.length);
console.log("Using Arrow Function ", a3);

//Nested Function
function outerFun(d) {
  function innerFun(e) {
    return d + e;
  }
  return innerFun;
}
const addTen = outerFun(10);
console.log(addTen(5));
