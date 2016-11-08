angular.module('app')
  .controller('secondController', ['loadService', function(loadService) {
    var vm = this;
	loadService.myArray = [];
  	loadService.load(2);
	vm.data = loadService.myArray;
  }]);