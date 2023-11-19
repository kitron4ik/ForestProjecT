const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testik');

var schema = mongoose.Schema({name: String})

schema.methods.scholoh = function() {
    console.log(this.get("name") + " колыхнул своими ветками")
}

const Tree = mongoose.model('Tree', schema);

const tree = new Tree({ name: 'Дуб' });
tree.save().then(function(err){
    tree.scholoh()
})