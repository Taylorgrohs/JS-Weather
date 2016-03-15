var apiKey = require('./../.env').apiKey;
var convertTemp = require('./../js/temperature.js').convertTemp;

$(document).ready(function(){
  $('#weatherTemp').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
      var currentTemp = parseInt(response.main.temp);
      var temp = convertTemp(currentTemp)
      $('.showWeather').text("The current temperature in " + city + " is " + temp[0] +"f/ " + temp[1] + "c");
    }).fail(function(error){
      $('.showWeather').text(error.message);
    });
  });
});
