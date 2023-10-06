#!/usr/bin/node
/**
 * 0. Lexical scoping and welcome message
 */

function welcome(firstName , lastName ){
    var fullName = firstName +' '+ lastName;
    function displayFullName(){
        alert('welcome '+ fullName + '!');
    }

    displayFullName();
}

welcome('Holberton', 'School');
