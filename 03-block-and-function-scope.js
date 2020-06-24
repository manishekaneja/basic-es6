// Function Scope
function scope1() {
  var x = 10;
  console.log("1. x=" + x);
  if (true) {
    var x = 20;
    console.log("2. x=" + x);
  }
  console.log("3. x=" + x);
}
scope1();

// Block Scope
function scope2() {
  let x = 10;
  console.log("1. x=" + x);
  if (true) {
    let x = 20;
    console.log("2. x=" + x);
  }
  console.log("3. x=" + x);
}
scope2();
