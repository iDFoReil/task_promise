angular
	.module('app.loading')
	.service('loadService', ['$http', loadService]);
	
	function loadService($http){
		var serv = this;
		
		serv.load = load;
		serv.myArray = [];
		
		function load(){
			$http.get("./json/1.json")
			.then(function(res){
				for(var i=0;i<res.data.events.length;i++){
					serv.myArray.push({data:res.data.events[i], done:false,})
				}
				return loadNextFile(res.data.path);
				},function(){alert("не то");
			}).then(function(res){
				for(var i=0;i<res.data.additionalEvents.length;i++){
					serv.myArray.push({data:res.data.additionalEvents[i], done:false});
				}
			}, function(){
				alert("все не то");
			})
			function loadNextFile(path){
				return $http.get(path);
			}
			
			function randomNumber(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}
		}
	}