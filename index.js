// Example express application adding the parse-server module to expose Parse
// compatible API routes.

var express = require('express');
var ParseDashboard = require('parse-dashboard');
var path = require('path');
let config = require('./dashboard.config');

let options = { allowInsecureHTTP: true };
var dashboard = new ParseDashboard(config, options);

var app = express();

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.DATABASE_DASHBOARD_MOUNT || '/dashboard';
app.use(mountPath, dashboard);

// Parse Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
  res.status(200).send('Welcome to database-dashboard!');
});

var port = process.env.DATABASE_DASHBOARD_PORT || 10634;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('database-dashboard running on port ' + port + '.');
});
