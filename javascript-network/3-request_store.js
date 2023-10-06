#!/usr/bin/node
/**
 * Write a script that gets the contents of a webpage and stores it in a file.
 */


const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const fileName = process.argv[3];

request(url, (error, response, body) => {
    if (error) {
        console.error(error);
    }
    const data = body;

    fs.writeFile(fileName, data, 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
    });
});
