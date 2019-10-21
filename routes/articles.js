'use strict';

var Router = require('koa-router');
var model = require('../models/article');

var router = Router({
   prefix: '/api/v1.0/articles'
});  //Prefixed all routes with /api/v1.0/articles

//because we are going to parse POST parameters we will import koa-bodyparser
var bodyParser = require('koa-bodyparser');

//Routes will go here
router.get('/', async (cnx) => {
   try{
      cnx.body = await model.getAll();
   }catch(error){
      cnx.response.status = error.status;
      cnx.body = {message:error.message};
   }
 })

//the id should be a number greater than or equal 1
router.get('/:id([0-9]{1,})', async (cnx, next) =>{

   let id = cnx.params.id;
   let data = await model.getById(id);

   if(data.length === 0){
      cnx.response.status = 404;
      cnx.body = {message:"article not found"}
   }
   else
      cnx.body = data;
});

//note that we have injected the body parser onlyin the POST request
router.post('/', bodyParser(), async (cnx, next) =>{

   let newArticle = {title:cnx.request.body.title, allText:cnx.request.body.allText};
   try{
      await model.add(newArticle);
      cnx.response.status = 201;
      cnx.body = {message:"added successfully"};
   }
   catch(error){
      cnx.response.status = error.status;
      cnx.body = {message:error.message};
   }
   

});
router.put('/:id([0-9]{1,})', async (cnx, next) =>{
   //TODO: edit an article
   
});
router.del('/:id([0-9]{1,})', async (cnx, next) =>{
   //TODO: edit an article
   
});


module.exports = router;
