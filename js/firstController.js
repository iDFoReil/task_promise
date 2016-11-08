angular.module('app')
  .controller('firstController', ['loadService', function(loadService) {
    var vm = this;
	
	loadService.myArray = [];
  	loadService.load(1);
	vm.data = loadService.myArray;
  }]);