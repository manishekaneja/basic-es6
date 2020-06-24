// Closures

var outerFunction = function () {
  console.log("OuterFunction entry point");
  var x = 5;
  // console.log(y);  // Uncommenting this will cause an Error
  var nestedFunction = function () {
    console.log("Inner Function entry Point");
    var y = 7;
    console.log(x);
    console.log(y);
    console.log("Inner Function exit Point");
    return 1000;
  };
  console.log("Outer Function exit point");
  return nestedFunction;
};

var myFunction = outerFunction();
console.log(myFunction);
const value = myFunction();
console.log(value);
