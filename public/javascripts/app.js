var app = angular.module('myLocalStorageApp', ['ngRoute', 'LocalStorageModule']);

app.config(['$routeProvider', '$locationProvider', '$httpProvider',
  function($routeProvider, $locationProvider, $httpProvider){
    $routeProvider
    .when('/', {
      templateUrl:'partials/index',
      controller:'MainCtrl'
    })
    .otherwise({
      redirectTo:'/'
    })
}]);

app.controller('MainCtrl', ['$scope', function($scope){
	$scope.message = 'What\'s up AngularJS?';
}]);