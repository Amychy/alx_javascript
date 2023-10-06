#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12
};

if (myObject.value !== 12) {
  myObject.incr = function () {
    this.value++;
  };
}

console.log(`{ type: 'object', value: ${myObject.value}${myObject.incr ? ', incr: [Function]' : ''} }`);

myObject.incr(); // Increment the value
console.log(`{ type: 'object', value: ${myObject.value}${myObject.incr ? ', incr: [Function]' : ''} }`);
myObject.incr();
console.log(`{ type: 'object', value: ${myObject.value}${myObject.incr ? ', incr: [Function]' : ''} }`);
myObject.incr();
console.log(`{ type: 'object', value: ${myObject.value}${myObject.incr ? ', incr: [Function]' : ''} }`);
