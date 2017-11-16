//MODULE

var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp.config(function ($routeProvider) {
    
        $routeProvider
        .when('/', {
            templateUrl: 'pages/home.htm',
            controller: 'homeController'
        }) 
        .when('/forecast', {
            templateUrl: 'pages/forecast.htm',
            controller: 'forecastController'
        });
});

// SERVICES
weatherApp.service('cityService', function() {

    this.city = "New York, NY";
})
// CONTROLLERS
weatherApp.controller('homeController', [
             '$scope','cityService',
    function ($scope, cityService) {

        $scope.city = cityService.city;
        $scope.$watch('city', function() {
            cityService.city = $scope.city;
        });
}]);

weatherApp.controller('forecastController', [
             '$scope','$resource','cityService',
    function ($scope, $resource, cityService) {

        $scope.city = cityService.city;

        $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=42cb9aef50660bb49eea27ae7256b0ec")
        
    
}]);


