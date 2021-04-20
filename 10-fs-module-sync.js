let fs = require('fs')

let first = fs.readFileSync('./content/first.txt', 'utf8');
let second = fs.readFileSync('./content/second.txt', 'utf8');

console.log(first,second)

fs.writeFileSync('./content/newfile.txt', `hello world ${ first}, ${second}`,{flag: 'a'}); //write new file
// if the file does not exist the node will create new one, if it exist, the node will overwrite
// {flag: 'a'} = to append, it will not delete the previous content and will add the new one. you can remove it