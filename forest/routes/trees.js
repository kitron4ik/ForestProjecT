const express = require('express');
const router = express.Router();
const Tree = require("../models/tree").Tree;

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с tree');
});

router.get("/:nick", async (req, res, next) => {
  try {
    const tree = await Tree.findOne({ nick: req.params.nick });
    console.log(tree);
    if (!tree) {
      throw new Error("Нет такого дерева!!");
    }
    res.render('tree', {
      title: tree.title,
      picture: tree.avatar,
      desc: tree.desc
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;