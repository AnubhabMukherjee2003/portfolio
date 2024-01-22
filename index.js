const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 5500;
const home= fs.readFileSync('./index.html')
const about= fs.readFileSync('./about.html')
const contact= fs.readFileSync('./contact.html')
const project= fs.readFileSync('./project.html')


const server = http.createServer((req, res) => {
    console.log(req.url);
    url1=req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.end(home);
    if(url1 == '/'){
        res.end(home);
    }
    else if(url1 == '/about'){
        res.end(about);
    }
    else if(url1 == '/project'){
        res.end(project);
    }
    else if(url1 == '/contact'){
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});