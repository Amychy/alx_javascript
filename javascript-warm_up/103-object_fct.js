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
  let result = '{ ';
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'function') {
      result += `${key}: [Function], `;
    } else {
      result += `${key}: ${JSON.stringify(value)}, `;
    }
  }
  result = result.slice(0, -2); // Remove the trailing comma and space
  result += ' }';
  return result;
}

console.log(stringifyObject(myObject));
myObject.incr();
console.log(stringifyObject(myObject));
myObject.incr();
console.log(stringifyObject(myObject));
myObject.incr();
console.log(stringifyObject(myObject));
