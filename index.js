const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(process.env["PORT"], () => {
  console.log("app starting on port " + process.env["PORT"]);
})