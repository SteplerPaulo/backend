var express = require("express");
const cors = require("cors");

const favicon = require("serve-favicon");
const path = require("path");
var app = express();


app.use(cors());
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/config/db.config.js");
require('./app/route/auth.route.js')(app);
require("./app/route/api.route.js")(app);

// Create a Server
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});
