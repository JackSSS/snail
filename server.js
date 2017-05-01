
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/app'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/app/index.html'));
});

app.listen(process.env.PORT || 5000);
console.log("server up on localhost:5000");