angular.module('myApp.controllers')
	.controller("MewController", function($scope){
		var defaultMew = "What are you mewing about?!";
  		$scope.message = "Make a Mew";
  		$scope.mewComment = defaultMew;
  		$scope.$watch('inputName',function(newVal){
		  	if(newVal ==="")
		     	$scope.form.inputName.$pristine = true;
		});

		$scope.isValid = function(mewComment){
			var mew = mewComment;
			if (mew === "" || mew === "What are you mewing about?!")
				return false;
			else
				return true;

		}

		
	
	})