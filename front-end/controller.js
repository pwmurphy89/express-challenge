var expressApp = angular.module('expressApp',[]);
expressApp.controller('studentController', function($scope, $http){
	$scope.message = "hello";

var studentList = function(urlEnding){
    $http.get("http://localhost:3000" + urlEnding)
    .then(function successCallBack(response){
			$scope.students = response.data;
		},function errorCallBack(response){
			console.log("error");
		}
		)
};



	studentList('/students/default');

	$scope.sortList = function(){
		studentList("/students/sort");
	}
	$scope.reverseList = function(){
		studentList('/students/reverse');
	}
});