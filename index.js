const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const router = require('./src/router');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json( {type: 'application/json'}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(router);

// Create http server and run it
const server = http.createServer(app);
const port = 3001;

server.listen(port, function() {
  console.log('Express server running on *:' + port);
});
