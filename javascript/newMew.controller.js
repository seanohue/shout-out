angular.module('myApp.controllers')
	.controller("MewController", function($scope, $location, UserFactory, $routeParams, MewFactory){
		$scope.user = UserFactory.get({user_id: $routeParams.id});

  		$scope.message = "Give a Mew to ";
  		$scope.shout = {'text':"What are you mewing about?!"};  		
		$scope.go = function (path) {
			$scope.shout.user_id = $routeParams.id;
			MewFactory.save($scope.shout);
	  		$location.path( path );

		};

	})