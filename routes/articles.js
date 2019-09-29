var Router = require('koa-router');
var model = require('../models/article');

var router = Router({
   prefix: '/api/v1.0/articles'
});  //Prefixed all routes with /api/v1.0/articles

//because we are going to parse POST parameters we will import koa-bodyparser
var bodyParser = require('koa-bodyparser');

//temporarily define some random articles in an array
var articles = [  {title:'hello article', fullText:'some text here to fill the body'}, 
                  {title:'another article', fullText:'again here is some text here to fill the body'},
                  {title:'coventry university ', fullText:'some news about coventry university in this article'}
               ];

//Routes will go here
router.get('/', async (cnx, next) => {
   let id = cnx.params.id;
   cnx.body = await model.getAll(id);
  
});
//the id should be a number greater than or equal 1
router.get('/:id([0-9]{1,})', async (cnx, next) =>{

   let id = cnx.params.id;
   cnx.body = await model.getById(id);
});

//note that we have injected the body parser onlyin the POST request
router.post('/', bodyParser(), async (cnx, next) =>{

   let newArticle = {title:cnx.request.body.title, allText:cnx.request.body.allText};
   await model.add(newArticle);
   cnx.body = {message:"added successfully"};

});
router.put('/:id', async (cnx, next) =>{
   //TODO: edit an article
   
});
router.del('/:id', async (cnx, next) =>{
   //TODO: edit an article
   
});


module.exports = router;
