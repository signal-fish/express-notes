const http = require('http')
const port = 5000

const server = http.createServer((req, res) => {
  console.log(req.method)
  const url = req.url

  // Home Page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home Page</h1>");
    res.end();
  }
  // About Page
  else if (url === "/about") {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write("<h1>About Page</h1>");
    res.end();
  }
  // 404
  else {
    res.writeHead(404, {'content-type': 'text/html'})
    res.write('<h1>404 Page Not Found</h1>')
    res.end()
  }

  
})

server.listen(port, () => {
  console.log(`server is listening on ${port}...`)
})