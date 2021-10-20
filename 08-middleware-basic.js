const express = require('express')
const app = express()
const port = 5000

// req => middleware => res

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.get('/', logger, (req, res) => {
  res.send("<h1>Home Page</h1>");
})

app.get('/about', logger, (req, res) => {
  res.send("<h1>About Page</h1>");
})

app.get('*', logger, (req, res) => {
  res.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})