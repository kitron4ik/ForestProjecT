const express = require('express');
const router = express.Router();
const Tree = require("../models/tree").Tree;
const async = require("async")

router.get('/:nick', async function(req, res, next) {
  try {
    const [tree, trees] = await Promise.all([
      Tree.findOne({ nick: req.params.nick })
    ]);
    if (!tree) {
      throw new Error("Нет такого");
    }
    renderTree(res, tree.title, tree.avatar, tree.desc, trees);
  } catch (err) {
    next(err);
  }
});
function renderTree(res, title, picture, desc, trees) {
  console.log(trees);

  res.render('tree', {
    title: title,
    picture: picture,
    desc: desc,
  });
}

module.exports = router;