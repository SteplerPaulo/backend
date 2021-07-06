var express = require('express');
const cors = require('cors');
const favicon = require('serve-favicon');
const path = require('path');


var app = express();

app.use(cors());
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
//db.sequelize.sync({force: true}).then(() => {
//  console.log('Drop and Resync with { force: true }');
//});

//require('./app/route/product.route.js')(app);
//require('./app/route/category.route.js')(app);
//require('./app/route/banner.route.js')(app);
//require('./app/route/banner.route.js')(app);
//require('./app/route/manufacturer.route.js')(app);
//require('./app/route/user.route.js')(app);
require('./app/route/api.route.js')(app);
 
// Create a Server
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})