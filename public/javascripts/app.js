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

app.controller('MainCtrl', ['$scope','$http', function($scope, $http){
	$scope.message = 'Check out this inventory';
  //get us some datas
  $http.get('/inventory')
  .success(function(data, status, headers, config){
    $scope.inventory = data;
  })
  .error(function(data, status, headers, config){
    $scope.message = 'Something exploded! '+data.message;
  });

  //scope helper functions
  $scope.edit = function(index){
    $scope.editing = true;
    $scope.item = $scope.inventory[index];
  }
  $scope.finishEditing = function(){
    $scope.editing = false;
    $scope.item = {};
  }
}]);