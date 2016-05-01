var express = require('express');
var router = express.Router();
var todo = require('../app/modeltodo');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'To Do List App // Çağdaş Dağ' });
});

router.get('/list', function(req,res){
	todo.find(function(error, todolist){
		if(error)
			res.send(error)

		res.json(todolist);
	});
});


router.post('/list', function(req, res) {


	todo.create({
		baslik : req.body.todoname,
		durum : 0
	}, function(err, todos) {
		if (err)
			res.send(err);

		todo.find(function(err, todolist) {
			if (err)
				res.send(err)
			res.json(todolist);
		});
	});

});

router.post('/list:todo_id', function(req, res) {
	todo.findById({
		_id : req.params.todo_id
	}, function(err, todos) {
		if (err)
			res.send(err);

		todos.durum = '1';
		todos.save();


		todo.find(function(err, todolist) {
			if (err)
				res.send(err)
			res.json(todolist);
		});
	});
});


router.delete('/list:todo_id', function(req, res) {
	todo.remove({
		_id : req.params.todo_id
	}, function(err, todos) {
		if (err)
			res.send(err);


		todo.find(function(err, todolist) {
			if (err)
				res.send(err)
			res.json(todolist);
		});
	});
});



module.exports = router;
