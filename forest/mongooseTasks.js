const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testik');

const Tree = mongoose.model('Tree', { name: String });

const tree = new Tree({ name: 'Дуб' });
tree.save().then(() => console.log('Шелох листьев'));