angular
	.module('app.loading', [])
	.service('loadService', ['$http','mainService', loadService]);
	
	function loadService($http, mainService){
		var serv = this;
		
		serv.load = load;
		
		function load(){
			var random = randomNumber(1,2);
			$http.get("./json/"+random+".json")
			.then(function(res){
				for(var i=0;i<res.data.events.length;i++){
					//mainService.data.push({anevent:res.data.events[i], done:"false"})
					mainService.data[mainService.data.length] = res.data.events[i];
				}
				return loadNextFile(res.data.path);
				},function(){alert("не то");
			}).then(function(res){
				for(var i=0;i<res.data.additionalEvents.length;i++){
					mainService.data[mainService.data.length] = res.data.additionalEvents[i];
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