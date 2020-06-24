const myObject = {
  a: 10,
  b: 20,
  c: 30,
};

// Directly assigning the value - Object is mutable
const newObject = myObject;
newObject.b = 30;
console.log(myObject);
console.log(newObject);
console.log(newObject === myObject);

console.log();

// Using Spread Operator - Object is immutable
const mordernWayNewObject = {
  ...myObject,
  b: 30,
};

console.log(myObject);
console.log(mordernWayNewObject);
console.log(mordernWayNewObject === myObject);
console.log();

// Other ways of copying object
const newObjectFromCreateFunction = Object.create(myObject);
console.log(myObject);
console.log(newObjectFromCreateFunction);
console.log(newObjectFromCreateFunction === myObject);

// Rest Parameter
const { a, b, ...remaining } = myObject;
console.log(a, b, remaining);
console.log();

// Applying Similar Approch in Arrays
const myArray = [10, 20, 30, 40];

// Spread in Array
const newArray = [...myArray];
console.log(newArray);

// Rest in Array
const [x, y, ...rest] = myArray;
console.log({ x, y, rest });
