#! /usr/bin/env node
let name = null;
if (process && process.argv && Array.isArray(process.argv) && process.argv.length > 2) {
  name = process.argv[2];
}

if (!name)
  console.log('Bye Bye!');
else
  console.log(name + ' Bye Bye!');
