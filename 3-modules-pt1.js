//Modules

//the names var will be in 4-modules-pt2
// the function will be in 5-modules-pt3
//this is a shared module
let names = require('./4-modules-pt2') // this will require the exported var from the file 4-modules-pt2
let sayHi = require('./5-modules-pt3') // this will require the exported function from the file 5-modules-pt3
let alt = require('./6-modules-pt4')

require('./7-modules-pt5') // i will just require the whole file, but there is no module export the the said file
                        // but it will still be displayed because there is a executing function on the file

console.log(alt); // will display all the import values from alt
sayHi(names.name1) // same with sayHi(name1)
sayHi(names.name2)