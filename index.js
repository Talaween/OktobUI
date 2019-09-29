//import koa
var Koa = require('koa');

//import all the routes
var welcome = require('./routes/welcome');
var admin = require('./routes/admin');
var articles = require('./routes/articles.js');

//create a koa instance and store it in app variable
var app = new Koa();

////apply the routes as a middleware
app.use(welcome.routes());
app.use(admin.routes());
app.use(articles.routes());

//if there is no environment variable set for port number
//use a default value of 3000
var port = process.env.PORT || 3000;

//run the werver on port 3000
app.listen(port);

