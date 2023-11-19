const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testik1');
var Tree = require("./models/tree").Tree

var schema = mongoose.Schema({name: String})

var tree = new Tree ({
    title:"Дубинский",
    nick:"Dubinskii"
})
console.log(tree)
tree.save().then(function(err, tree, affected){
    console.log(tree.title)
})