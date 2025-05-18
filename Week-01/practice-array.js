// Basic Operations on JavaScript Arrays

/**Accessing Elements of an Array
Any element in the array can be accessed using the index number. The index in the arrays starts with 0. */
const fruits = ["Kiwi", "Apple", "Orange"];
console.log(fruits[0]);
console.log(fruits[1]);

/**Accessing the First Element of an Array
The array indexing starts from 0, so we can access first element of array using the index number. */
let fst = fruits[0];
console.log("First Item: ", fst);

/**Accessing the Last Element of an Array
We can access the last array element using [array.length - 1] index number. */
let lst = fruits[fruits.length - 1];
console.log("Last Item: ", lst);

/**Modifying the Array Elements
Elements in an array can be modified by assigning a new value to their corresponding index. */
console.log(fruits);
fruits[0] = "Grapes";
console.log(fruits);

/**
 * Adding Elements to the Array
Elements can be added to the array using methods like push() and unshift().

The push() method add the element to the end of the array.
The unshift() method add the element to the starting of the array.
 */

// Add Element to the end of Array
fruits.push("Banana");
console.log(fruits);

// Add Element to the beginning
fruits.unshift("Blueberry");
console.log(fruits);

/**Array Length
We can get the length of the array using the array length property. */
console.log("Array Length: ", fruits.length);

/**Removing Elements from an Array
To remove the elements from an array we have different methods like pop(), shift(), or splice().

The pop() method removes an element from the last index of the array.
The shift() method removes the element from the first index of the array.
The splice() method removes or replaces the element from the array. */
console.log("Original Array: " + fruits);

// Removes and returns the last element
fruits.pop("Banana");
console.log("After Removing the last: " + fruits);

// Removes and returns the first element
fruits.shift();
console.log("After Removing the First: " + fruits);

// Removes 2 elements starting from index 1
fruits.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + fruits);

/* Array Length
We can get the length of the array using the array length property. */
let a = ["HTML", "CSS", "JS"];
console.log(a.length);

/* Array Length Importance
1. Determining the Number of Elements in an Array​
The length property provides the total number of elements in an array. It allows you to quickly check how many items are in an array without having to manually count them.​

2. Iterating Over Arrays​

The length property is often used in loops to iterate through arrays. It helps to avoid hard-coding values, making the code more flexible and less prone to errors. Example using a for loop:​ */
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

/* 3. Adding Elements to the End of an Array​
You can use the length property to add elements to the end of an array.By setting the array element at the index equal to length, you append a new item.​ */
const animals = ["dogs", "cats"];
animals[animals.length] = "rabbit";
console.log(animals);

/* 4. Truncating an Array​
The length property can be used to truncate an array by directly setting it to a smaller value.
Example​ */
const colors = ["Red", "Green", "Blue", "Yellow"];
colors.length = 2;
console.log(colors);

/* Dynamic Nature of JavaScript Arrays​
JavaScript arrays are dynamic, meaning their size can change during runtime.The length property automatically updates when elements are added or removed, allowing you to work with arrays of varying sizes seamlessly​ */
const items = [];
items.push("Item1");
items.push("Items2");
console.log(items.length);

/* Dynamic Nature of JavaScript Arrays​

JavaScript arrays are dynamic, meaning their size can change during runtime.The length property automatically updates when elements are added or removed, allowing you to work with arrays of varying sizes seamlessly​ */
let sub = ["HTML", "CSS", "JS"];

// Increase the array length to 7
sub.length = 7;
console.log("After Increasing Length: ", sub);

// Decrease the array length to 2
sub.length = 2;
console.log("After Decreasing Length: ", sub);

/* Array Concatenation
Combine two or more arrays using the concat() method. It returns new array containing joined arrays elements. */
let course1 = ["HTML", "CSS", "JS", "React"];
let course2 = ["Node.js", "Express.js"];

// Concatenate both arrays
let concateArray = course1.concat(course2);
console.log("Concatenated Array: ", concateArray);

/* Array toString()​ 
It will change the data type of your array into a string which will be comma separated​*/
const soda = ["Coke", "Sprite", "Mountain Dew"];
console.log("Array: ", soda);
console.log("Converted to String: ", soda.toString());

/* Array Join
This will join every entry in your array into one string.  It acts like toString() method but in this one you can specify a separator​ */
console.log(soda.join("*"));

/* Check the Type of an Arrays
The JavaScript typeof operator is used ot check the type of an array. It returns "object" for arrays. */
console.log(typeof soda);
