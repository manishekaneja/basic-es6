// this object
var cat = {
  name: "Gus",
  color: "gray",
  age: 15,
  printInfo: function () {
    console.log(this);
    // Fucntion expression
    nestedFunction = function () {
      console.log(this);
    };
    // Arrow Function
    nestedArrowFunction = () => {
      console.log(this);
    };
    nestedFunction();
    nestedArrowFunction();
  },
};

cat.printInfo();

// Apply, Bind and Call

function globalFunc(type, sec) {
  console.log(this);
  console.log(type, sec);
  console.log();
}
console.log("Apply");
globalFunc.apply(
  {
    name: 10,
  },
  ["cat", "@"]
);

console.log("Bind");
const bindedFunction = globalFunc.bind(
  {
    name: 10,
  },
  "cat",
  "@"
);
bindedFunction();

console.log("Call");
globalFunc.call(
  {
    name: 10,
  },
  "cat",
  "@"
);
