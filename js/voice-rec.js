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

});

myApp.controller('login', ['$scope','$http','$state','$location','$timeout',function($scope,$http,$state,$location,$timeout){
	var logInButton = document.getElementById('logIn');
	
	logInButton.onclick = function($location){
		var usernameInput = document.getElementById('username').value;
		var passwordInput = document.getElementById('password').value;
		
		if(usernameInput == 'bagel' & passwordInput == 'bagel17la'){
			console.log('works');
			$state.go('trafficHistory');

		}else{
			alert('ERROR WRONG LOGIN')
		}
	}

}]);

myApp.controller('trafficHistory', ['$scope','$location','$http','$rootScope','$state', function($scope,$location,$http,$rootScope,$state){
	$http.get('/users').then(function(data) {
		$scope.users = data.data;
	})

}]);

