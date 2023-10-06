#!/usr/bin/node
/**
 * Update this script by adding a new function incr that increments the integer value.

You are not allowed to use var
 */

const myObject = {
  type: 'object',
  value: 12,
  incr: function () {
    this.value++;
  }
};

// A function to convert the object to a string with '[Function]' for functions
function stringifyObject(obj) {
  return JSON.stringify(obj, (_, value) =>
    typeof value === 'function' ? '[Function]' : value
  );
}

console.log(stringifyObject(myObject));
myObject.incr();
console.log(stringifyObject(myObject));
myObject.incr();
console.log(stringifyObject(myObject));
myObject.incr();
console.log(stringifyObject(myObject));
