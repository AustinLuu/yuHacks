var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!'); // This will serve your request to '/'.
});

app.listen(5000, function () {
  console.log('PORT 5000 now active');
 });
 