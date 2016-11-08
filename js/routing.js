angular
	.module('routing', ["ui.router"])
	.config(function ($stateProvider) {

    $stateProvider
    .state('home', {
      url: "/",
      
    })
    .state('first', {
      url: "/first",
      templateUrl: "./templates/first.html",
	  
    })
	.state('second', {
	  url: "/second",
	  templateUrl: "./templates/second.html",
	})
	})