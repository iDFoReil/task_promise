angular.module('app', ['app.service', 'app.loading'])
  .controller('TodoListController', ['mainService','loadService', function(mainService, loadService) {
    var todoList = this;

	loadService.load();
	todoList.data = mainService.data;
	todoList.done = mainService.done;
    }
  ]);