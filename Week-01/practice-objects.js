//Creation Using Object Literal
let user = {
  name: "Rhailyn",
  age: 28,
  job: "Student",
  greet: function () {
    console.log("Hello " + this.name);
  },
};
console.log(user);

//Creation Using new Object() Constructor
let obj = new Object();
(obj.name = "Rhailyn"), (obj.age = 28), (obj.job = "Student");
console.log(obj);

//Modifying Object Properties
user.age = 20;
console.log(user);

//Adding Properties to an Object
user.nationality = "Filipino";
console.log(user);

//Removing Properties from an Object
delete user.nationality;
console.log(user);

//Checking if a Property Exists
console.log("nationality" in user);
console.log(user.hasOwnProperty("age"));

//adding function and using function
user.greet();

//Iterating Through Object Properties
for (let key in user) {
  console.log(key + ": " + user[key]);
}

//Merging Objects
let user1 = { name: "Rhai" };
let user2 = { age: 28 };
let user3 = { ...user1, ...user2 };
console.log(user3);

//Object Length
console.log(Object.keys(user).length);

//Recognizing a JavaScript Object
console.log(typeof user === "object" && user !== null);
