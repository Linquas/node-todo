const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5aa2a707d8229327e8ef6fb8';

if (!ObjectID.isValid(id)) {
    console.log('Id not valid');
}

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove

Todo.findOneAndRemove({_id: '5aa3437185c9653bf8d0b194'}).then((doc) => {
    console.log(doc);
});

Todo.findByIdAndRemove('5aa3437185c9653bf8d0b194').then((doc) => {
    console.log(doc);
});