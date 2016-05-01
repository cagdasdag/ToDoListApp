var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
	baslik: String,
	durum: Boolean
});

var todo = mongoose.model('todo', todoSchema);
module.exports= todo;