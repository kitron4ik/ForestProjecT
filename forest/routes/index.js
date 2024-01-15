const express = require('express');
const router = express.Router();

const Tree = require("../models/tree").Tree;
var User = require("./../models/User").User

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    req.session.greeting = "Hi!!!"
    res.render('index', { title: 'Express', menu: menu, counter: req.session.counter });
  } catch (err) {
    next(err);
  }
});



router.get('/logreg', async function (req, res, next) {
  res.render('logreg', { title: 'Вход', error: null });
});



router.post('/logreg', async function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const user = await User.findOne({ username });
    if (user) {
      if (await user.checkPassword(password)) {
        req.session.user = user._id;
        res.redirect('/');
      } else {
        res.render('logreg', { title: 'Вход', error: 'Неверный пароль' });
      }
    } else {
      const newUser = new User({ username, password });
      await newUser.save();
      req.session.user = newUser._id;
      res.redirect('/');
    }
  } catch (err) {
    next(err);
  }
});



module.exports = router;