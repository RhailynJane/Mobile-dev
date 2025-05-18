//Example 1
const age = 16;
const canDrive = age >= 18 ? true : false;
console.log(canDrive);

//Example 2
const grade = 80;
const res = grade >= 90 ? "Pass" : "Fail";
console.log(res);

//Nested Ternary Operators
let day = 5;
let greeting =
  day === 1
    ? "Start of the week"
    : day === 2
    ? "Second day"
    : day === 3
    ? "Midweek"
    : day === 4
    ? "Fourth day"
    : day === 5
    ? "Almost weekend"
    : "Weekend";
console.log(greeting);

// Ternary Operator in Functions
function checkAge(age) {
  return age >= 18 ? "Adult" : "Minor";
}

console.log(checkAge(20));

// Using the Ternary Operator with Function Calls
function sayHello(test) {
  console.log(`Hello, ${test}`);
}

function sayGoodbye(test) {
  console.log(`Goodbye, ${test}`);
}

const isLeaving = true;
const test = "Rhai";

isLeaving ? sayGoodbye(test) : sayHello(test);

//Exercise1
function checkAge(age) {
  return age >= 18 ? "You are an adult" : "You are a minor";
}
console.log(checkAge(16));
console.log(checkAge(30));

//Exercise2
function isEven(number) {
  return number % 2 == 0 ? "Even" : "Odd";
}
console.log(isEven(10));
console.log(isEven(13));

//Exercise3
function getGreeting(hour) {
  return hour < 12
    ? "Good Morning"
    : hour >= 12 && hour < 18
    ? "Good Afternoon"
    : "Good Evening";
}

console.log(getGreeting(6));
console.log(getGreeting(15));
console.log(getGreeting(23));

//Exercise4
function passOrFail(score) {
  return score >= 50 ? "Pass" : "Fail";
}
console.log(passOrFail(49));
console.log(passOrFail(50));
console.log(passOrFail(51));
