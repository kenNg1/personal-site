var router = require('express').Router();

router.get('/', function(req,res){
  res.render('main/home');
  });

router.get('/blog', function(req,res){
  res.render('main/blog');
  });

router.get('/aboutme', function(req,res){
  res.render('main/aboutme');
  });


module.exports = router;
