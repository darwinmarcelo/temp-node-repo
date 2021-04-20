let path = require('path')

console.log(path.sep); //display path seperators "/"

let filePath = path.join('content','subfolder','sample.txt') // joins the value inside the parameter to become a file path
console.log(filePath);

console.log(path.basename(filePath)); //displays the basename "sample.txt"

console.log(path.resolve(__dirname,'content','subfolder','sample.txt')); //displays absolute file path