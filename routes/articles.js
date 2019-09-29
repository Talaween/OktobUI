var Router = require('koa-router');
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
router.get('/', getAll);
//the id should be a number greater than or equal 1
router.get('/:id([0-9]{1,})', getById);
//note that we have injected the body parser onlyin the POST request
router.post('/', bodyParser(), createArticle);
router.put('/:id', updateArticle);
router.del('/:id', deleteArticle);

function getAll(cnx, next){
  cnx.body = articles;
  
}

function getById(cnx, next){

   let id = cnx.params.id;

   if((id < articles.length+1) && (id > 0))
      cnx.body = articles[id-1]
   else
      cnx.body = {message:'NOT Found'}
}

function createArticle(cnx, next){

   let newArticle = {title:cnx.request.body.title, fullText:cnx.request.body.fullText};
   articles.push(newArticle);
   cnx.body = {message:"added successfully"};

}

function updateArticle(cnx, next){
   //TODO: edit an article
}

function deleteArticle(cnx, next){
   //TODO: delete an article
}

module.exports = router;
