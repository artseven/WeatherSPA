// SERVICES
weatherApp.service('cityService', function() {
    
   this.city = "Miami";
});

weatherApp.service('weatherService', ['$resource', function($resource) {

  this.GetWeather = function(city, days) {
      var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=a0be02eb7e1ad8c86374d21ee734d432");

      return weatherAPI.get({q: city, cnt: days});
  };
}]);