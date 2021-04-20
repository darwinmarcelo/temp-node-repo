let fs = require('fs')

fs.readFile('./content/first.txt', 'utf8', (err, result)=> {
    if (err){
        console.log(err);
        return;
    }
    let first = result;
    fs.readFile('./content/second.txt', 'utf8', (err, result)=> {
        if (err){
            console.log(err);
            return;
        }
        let second = result;
        fs.writeFile('./content/result-async.txt', `the result is: ${first}, ${second}`, (err, result)=> {
            if (err){
                console.log(err);
                return;
            }
            console.log(result); // console will be undefine but the file is created/overwritten
        })
    });
});