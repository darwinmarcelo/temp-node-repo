let os = require('os')

let user = os.userInfo() // info about the current user
console.log(user);

console.log(`The system uptime is ${os.uptime()} seconds`); // info about the system uptime in seconds

let currentOS = { // displays the different characteristic os OS
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);