//  Hoisting

console.log("With var");
hoisting_example1();
function hoisting_example1() {
  console.log("1. x=" + x);
  var x = 10;
  console.log("2. x=" + x);
}
console.log("");

// ==========================
console.log("With let");
hoisting_example2();
function hoisting_example2() {
  //   console.log("1. x=" + x);   // Uncommenting this line will give and error
  let x = 10;
  console.log("2. x=" + x);
}
console.log("");

// ==========================
console.log("With const");
hoisting_example3();
function hoisting_example3() {
  //   console.log("1. x=" + x);   // Uncommenting this line will give and error
  const x = 10;
  console.log("2. x=" + x);
}
