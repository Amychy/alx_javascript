#!/usr/bin/node
/**
 * Write a class Square that defines a square and inherits from Square of 5-square.js
 */


const square = require('./5-square');

class Square extends square {
    charPrint(c) {
        if (c === undefined) {
            console.log(('X'.repeat(this.width) + '\n').repeat(this.height - 1) + 'X'.repeat(this.width));
        } else {
            console.log((c.repeat(this.width) + '\n').repeat(this.height - 1) + c.repeat(this.width));
        }
    }
}
module.exports = Square;
