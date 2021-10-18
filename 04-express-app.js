const express = require('express')
const path = require('path')
const port = 5000

const app = express()

// setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './http-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
