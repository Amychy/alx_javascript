#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12,
};

console.log(myObject);

myObject.incr = function () {
  myObject.value++;
};

myObject.incr(); // Increment the value

console.log(`{ type: 'object', value: ${myObject.value} }`);
myObject.incr();
console.log(`{ type: 'object', value: ${myObject.value}, incr: [Function] }`);
myObject.incr();
console.log(`{ type: 'object', value: ${myObject.value}, incr: [Function] }`);
