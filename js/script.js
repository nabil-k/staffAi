var myApp = angular.module('myApp',['ui.router']);
//Website Routes
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

//Logged In Cookie
document.loggedIn;

//Login Controller
myApp.controller('login', ['$scope','$http','$state','$location','$timeout',function($scope,$http,$state,$location,$timeout){

	var usernamePass;
	var passwordPass;
	var logInButton = document.getElementById('logIn');
	
	//Gets password crendentials
	$http.get('/credentials').then(function(data){
			usernamePass = data.data.username;
			passwordPass = data.data.password;
	})
	
	//Checks is user has logged in or not
	document.loggedIn = 'false';
	if(document.loggedIn === 'false'){
		$state.go('login');
		console.log("your aren't logged in");
	}else{
		console.log("you're logged in")
	}

	console.log(document.loggedIn);


	logInButton.onclick = function($location){
		var usernameInput = document.getElementById('username').value;
		var passwordInput = document.getElementById('password').value;
		if(usernameInput == usernamePass & passwordInput == passwordPass){
			document.loggedIn = 'true';
			$state.go('trafficHistory');

		}else{
			var spanErrorText = document.getElementById('error-text');
			spanErrorText.innerHTML = "Incorrect Login";
			
		}
	}

}]);

//Traffic History Controller
myApp.controller('trafficHistory', ['$scope','$location','$http','$rootScope','$state', function($scope,$location,$http,$rootScope,$state){
	$http.get('/user').then(function(data) {
		$scope.users = data.data;
	})

	var logOutButton = document.getElementById('logOutButton');
	
	logOutButton.onclick = function(){
		document.loggedIn = 'false';
	}

	console.log(document.loggedIn);

	if(document.loggedIn === 'false'){
		$state.go('login');
		console.log("your aren't logged in");
	}else{
		document.loggedIn = 'true';
		console.log("you're logged in")
	}

}]);

myApp.controller('status', ['$scope','$location','$http','$rootScope','$state', function($scope,$location,$http,$rootScope,$state){


}]);



