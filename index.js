//import koa
var Koa = require('koa');
//import koa-router which is used to route user request to its path
var Router = require('koa-router');
//import koa-body parser whic his used to extract parameters from requests

//create a koa instance and store it in app variable
var app = new Koa();

var router = new Router();

router.get('/api/v1.0', welcomeAPI);

//use the root routes
app.use(router.routes());

//import the Router we defined in articles.js
var articles = require('./routes/articles.js');

//apply the routes as a middleware
app.use(articles.routes());

//run the werver on port 3000
app.listen(3000);

function welcomeAPI(cnx, next){
    console.log("yes")
    cnx.body = {message:'Welcome to Oktob API version 1.0'};
}