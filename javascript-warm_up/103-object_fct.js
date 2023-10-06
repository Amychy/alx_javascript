#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12,
  incr: function () {
    this.value++;
  }
};

console.log(`{ type: 'object', value: ${myObject.value}${myObject.value === 12 ? '' : ', incr: [Function]'} }`);
myObject.incr(); // Increment the value
console.log(`{ type: 'object', value: ${myObject.value}, incr: [Function] }`);
myObject.incr();
console.log(`{ type: 'object', value: ${myObject.value}, incr: [Function] }`);
myObject.incr();
console.log(`{ type: 'object', value: ${myObject.value}, incr: [Function] }`);
