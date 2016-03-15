var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#forecast').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + apiKey).then(function(response) {
        for(var i = 0; i < response.list.length; i+=8)
        {
          $('.showWeather').append("<p>weather for " + city + " is " + response.list[i].dt_txt + "</p>");
        }
      }).fail(function(error) {
      $('.showWeather').text(error.message);
    });
  });
});
