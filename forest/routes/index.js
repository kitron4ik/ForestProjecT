const express = require('express');
const router = express.Router();
const Tree = require("../models/tree").Tree;

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const menu = await Tree.find({}, { _id: 0, title: 1, nick: 1 });
    res.cookie('greeting', 'Hi!!!').render('index', { 
      title:'Express', 
      menu:menu 
    });
    res.render('index', {
      title: 'Express',
      menu: menu
    });
  } catch (err) {
    next(err);
  }
});


module.exports = router;