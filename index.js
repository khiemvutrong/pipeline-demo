const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000, () => {
    console.log("app starting on port " + 3000);
})