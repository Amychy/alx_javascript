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
  value: function () {
    myObject.value++;
  },
});

myObject.incr(); // Increment the value

console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
