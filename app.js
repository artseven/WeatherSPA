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

    this.city = "New York";
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
             '$scope','$resource', '$sce','cityService',
    function ($scope, $resource, $sce, cityService) {

        $scope.city = cityService.city;

        $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=a0be02eb7e1ad8c86374d21ee734d432");
        
        $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: 2});

        $scope.convertToFahrenheit = function(degK) {
            return Math.round((1.8 * (degK-273)) + 32);
        }
}]);


