'use strict';

//import koa
var Koa = require('koa');
const cors = require('@koa/cors');
const passport = require('koa-passport');

//import all the routes
var welcome = require('./routes/welcome');
var admin = require('./routes/admin');
var users = require('./routes/users.js');
var articles = require('./routes/articles.js');

//create a koa instance and store it in app variable
var app = new Koa();

app.use(cors());

//this import will run the code in the auth.js
require('./auth');
app.use(passport.initialize());

//apply the routes as a middleware
app.use(welcome.routes());
app.use(admin.routes());
app.use(users.routes());
app.use(articles.routes());

//if there is no environment variable set for port number
//use a default value of 3000
var port = process.env.PORT || 3000;

//run the werver on port 3000

app.listen(port);
