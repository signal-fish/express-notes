const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  console.log("User request the home page");
  res.status(200).send("<h1>Home Page</h1>");
});

app.get('/about', (req, res) => {
  console.log("User request the about page");
  res.status(200).send("<h1>About Page</h1>");
})

app.all("*", (req, res) => {
  console.log("404 Page Not Found");
  res.status(404).send("<h1>404 Page Not Found</h1>");
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
