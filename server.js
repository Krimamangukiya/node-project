const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url == '/') {
        const data = fs.readFileSync('data.txt', 'utf-8')
        res.write(data)
    }
    else if (req.url == '/home') {
        res.write("home")
        fs.writeFileSync('data.txt','write system')
    }
    else if (req.url == "/about") {
        // fs.writeFileSync('/data12.txt', 'write system sync')
        // res.write("about")
    }
    else if (req.url == "/content") {
        // fs.unlinkSync('data78.txt')
         // res.write("content")
    }
    res.end()
})
server.listen(5009) 