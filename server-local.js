'use strict';
var server = require('./server');
// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

server.listen(port, host, function() {
  console.log('Running CORS Anywhere on ' + host + ':' + port);
});