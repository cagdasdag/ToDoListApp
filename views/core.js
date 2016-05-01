var scotchTodo = angular.module('todolistapp', []);

function mainController($scope, $http) {
	$scope.formData = {}

	// when landing on the page, get all todos and show them
	$http.get('/list')
		.success(function(data) {
			$scope.todolist = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.createTodo = function() {
		$http.post('/list', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.todolist = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	$scope.editToDo = function(id) {
		$http.post('/list' + id)
			.success(function(data) {
				$scope.todolist = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	// delete a todo after checking it
	$scope.deleteTodo = function(id) {
		$http.delete('/list' + id)
			.success(function(data) {
				$scope.todolist = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};


}
