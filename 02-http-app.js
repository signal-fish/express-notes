const http = require('http')
const {readFileSync} = require('fs')
const port = 5000;

// get all files
const homePage = readFileSync("./http-app/index.html");
const homeStyles = readFileSync("./http-app/styles.css");
const homeLogic = readFileSync("./http-app/http-app.js");

const server =http.createServer((req, res) => {
  const url = req.url;
  console.log(url);

  // home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // css
  else if (url === "/css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
  // javascript
  else if (url === "/js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
})

server.listen(port, () => {
  console.log(`server is listening on ${port}...`);
});