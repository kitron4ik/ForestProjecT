var express = require('express');
var router = express.Router();

var Tree = require("../models/tree").Tree

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с tree');
});



router.get("/:nick", function(req, res, next) {
    res.send(req.params.nick);
});
  
router.get('/:nick', function(req, res, next) {
  Cat.findOne({nick:req.params.nick}, function(err, tree){
  if(err) return next(err)
  if(!tree) return next(new Error("Нет такого котенка в этом мультике"))
  res.render('tree', {
  title: tree.title,
  picture: tree.avatar,
  desc: tree.desc
  })
  })
  })
module.exports = router;
