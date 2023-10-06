#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12,
};

console.log(myObject);

myObject.incr = function () {
  myObject.value++;
};

Object.defineProperty(myObject, 'incr', {
  enumerable: false, // Prevent the function from being included in the output
  value: '[Function]', // Replace the function with '[Function]' in the output
});

myObject.incr(); // Increment the value

console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
