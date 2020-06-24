// Function Declaration and Defination
first();
function first() {
  console.log("I am first function");
}
console.log(first);

// Function Expression
// second();    //Uncommenting over here will give an error
var second = function () {
  console.log("I am second function");
};
second();
console.log(second);

// IIFE
(function () {
  console.log("I am an iife");
})();
