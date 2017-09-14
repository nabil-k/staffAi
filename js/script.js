var myApp = angular.module('myApp',['ui.router']);
myApp.config(function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
 	$stateProvider.state('login', {
        url: "/login",
        templateUrl: './templates/login.html'
    })

    $stateProvider.state('trafficHistory',{
    	url:'/trafficHistory',
    	templateUrl:'../templates/trafficHistory.html'
    })

    $stateProvider.state('status',{
    	url:'/analytics',
    	templateUrl:'../templates/analytics.html'
    })

});

myApp.controller('login', ['$scope','$http','$state','$location','$timeout',function($scope,$http,$state,$location,$timeout){

	var usernamePass;
	var passwordPass;
	var logInButton = document.getElementById('logIn');
	
	$http.get('/credentials').then(function(data){
			usernamePass = data.data.username;
			passwordPass = data.data.password;
	})
	

	logInButton.onclick = function($location){
		var usernameInput = document.getElementById('username').value;
		var passwordInput = document.getElementById('password').value;
		if(usernameInput == usernamePass & passwordInput == passwordPass){
			$state.go('trafficHistory');

		}else{
			var spanErrorText = document.getElementById('error-text');
			spanErrorText.innerHTML = "Incorrect Login";
			
		}
	}

}]);

myApp.controller('trafficHistory', ['$scope','$location','$http','$rootScope','$state', function($scope,$location,$http,$rootScope,$state){
	$http.get('/user').then(function(data) {
		$scope.users = data.data;
		console.log(data.data)
	})

}]);

myApp.controller('status', ['$scope','$location','$http','$rootScope','$state', function($scope,$location,$http,$rootScope,$state){


}]);



