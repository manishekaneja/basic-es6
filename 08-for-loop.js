const myArray = [1, 2, 45, -1, 23, 43, 10];

for (let i = 0; i < myArray.length; i++) {
  console.log(` i=${i} value=${myArray[i]}`);
}
console.log();

for (let i in myArray) {
  console.log(` i=${i} value=${myArray[i]}`);
}
console.log();

for (let i of myArray) {
  console.log(` value=${i}`);
}
console.log();

const myNewArray = [10, 20, 30, 40, 50];
console.log(
  myNewArray.forEach((item) => {
    console.log(item * 2);
    return item * 2;
  })
);

console.log(
  myNewArray.map((item) => {
    return item * 2;
  })
);

// Other possible functions
// filter
// sort
// reduce
// find
