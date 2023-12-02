const express = require('express');
const router = express.Router();
//const Tree = require("../models/tree").Tree;
const async = require("async")
var db = require('../mySQLConnect.js');
//var checkAuth = require("./../middleware/checkAuth.js")

router.get("/:nick", function(req, res, next) {
  db.query(`SELECT * FROM trees WHERE trees.nick = '${req.params.nick}'`, (err,trees) => {
  if(err) {
    console.log(err);
    if(err) return next(err)
    } else {
      if(trees.length == 0) return next(new Error("Такого пышного древа нет"))
        var tree = trees[0];
        res.render('tree', {
          title: tree.title,
          picture: tree.avatar,
          desc: tree.about
  })
}
})

});
  



// router.get('/:nick', async function(req, res, next) {
//   try {
//     const [tree, trees] = await Promise.all([
//       Tree.findOne({ nick: req.params.nick })
//     ]);
//     if (!tree) {
//       throw new Error("Нет такого");
//     }
//     renderTree(res, tree.title, tree.avatar, tree.desc, trees);
//   } catch (err) {
//     next(err);
//   }
// });

// function renderTree(res, title, picture, desc, trees) {
//   res.render('tree', {
//     title: title,
//     picture: picture,
//     desc: desc,
//   });
// }

module.exports = router;