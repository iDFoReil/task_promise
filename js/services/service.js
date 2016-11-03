angular
	.module('app.service', [])
	.service('mainService', mainService);
	
	function mainService(){
		var serv = this;
		/*
		var dataArr = [{anevent:"", done:false}];
		
		var getData = function(){
			return dataArr;
		}
		*/
		
		serv.privet = {
			data: [],
			done: [1,1,1,1,1],
		}
		return serv.privet;
	}