for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

const fruits = ["Apple", "banana", "Grapes", "Blueberry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach((item) => {
  console.log(item);
});

for (const fruit of fruits) {
  console.log(fruit);
}

for (let i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log(i + " is even");
  } else console.log(i + " is odd");
}
