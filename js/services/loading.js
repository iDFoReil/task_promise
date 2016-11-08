angular
	.module('app.loading')
	.service('loadService', ['$http', loadService]);
	
	function loadService($http){
		var serv = this;
		
		serv.load = load;
		serv.myArray = [];
		
		function load(a){
			$http.get("./json/"+a+".json")
			.then(function(res){
				for(var i=0;i<res.data.events.length;i++){
					serv.myArray.push({data:res.data.events[i], done:false,})
				}
				return console.log("ok");
				},function(){alert("Данные не загружены");
			})
		}
	}