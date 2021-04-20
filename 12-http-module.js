let http = require('http')

let server =  http.createServer((req, res) =>{
    if (req.url === "/") {
        res.end("Welcome to our home page")
    }
    else if (req.url === "/about") {
        res.end("About Us")
    }
    else {
        res.end(`
        <h1>Opps!</h1>
        <p>We can't seem to find that one!</p>
        <a href = '/'>back home</a>
    `)
    }
})

server.listen(4000)