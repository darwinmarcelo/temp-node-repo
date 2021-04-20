// npm global command, comes with the node package
// command: npm -v / npm --v

//local dependency - used only in a particular proj
// command: npm i <packageName>

// global dependency - used it in any proj
// command: npm install -g <packageName>

//package.json - manifest file (stores important info about the project/package)
//manual approach - (create package in the root, create properties etc)
// command: npm init (step by step, enter to skip)
// command: npm init -y (evrything default)

// i installes lodash package for example

const _ = require('lodash')

let arr = [1,[2,[3,[4]]]] // arrays within array
let newArr = _.flattenDeep(arr) // with sort the array as regular arrray
console.log(newArr);