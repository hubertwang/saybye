#! /usr/bin/env node

const say = require('say');

let name = null;
if (process && process.argv && Array.isArray(process.argv) && process.argv.length > 2) {
  name = process.argv[2];
}

let message = null;
let greeting = "Bye Bye!";

if (!name)
  message = greeting;
else
  message = name + ' ' + greeting;

console.log(message);
say.speak(message);