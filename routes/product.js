var express=require('express');
var ProductController=require('../controllers/product');

var router = express.Router();

router.post('/product',ProductController.product);

router.get('/product',ProductController.getProducts);
/* router.get('/offers',ProductController.offers); */

module.exports=router;