'use strict';

var Router = require('koa-router');
var router = Router({
   prefix: '/api/v1.0'
}); 

//note how we use the arrow function syntax here
router.get('/', (cnx, next) => {
    cnx.body = {message:'Welcome to Oktob API version 1.0'};
});

module.exports = router;
