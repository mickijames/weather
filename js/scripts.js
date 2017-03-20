// http://simpleweatherjs.com/

$.simpleWeather({
    location: 'Cheney, WA',
    unit: 'f',
    success: function(weather) {
    // Entire weather object
    console.log(weather);

    // Display Today's Weather
    $('.city').text(weather.city);
    $('.temp').text(weather.temp);

    // Forecast Day 1
    $('aside figure:nth-child(1) h2').text(weather.forecast[0].day);
    $('aside figure:nth-child(1) img').attr('src', weather.forecast[0].image);
    $('aside figure:nth-child(1) figcaption').text(weather.forecast[0].text);
    $('aside figure:nth-child(1) .high').text(weather.forecast[0].high);

    // Forecast Day 2
    $('aside figure:nth-child(2) h2').text(weather.forecast[1].day);
    $('aside figure:nth-child(2) img').attr('src', weather.forecast[1].image);
    $('aside figure:nth-child(2) figcaption').text(weather.forecast[1].text);
    $('aside figure:nth-child(2) .high').text(weather.forecast[1].high);

    // Forecast Day 3
    $('aside figure:nth-child(3) h2').text(weather.forecast[2].day);
    $('aside figure:nth-child(3) img').attr('src', weather.forecast[2].image);
    $('aside figure:nth-child(3) figcaption').text(weather.forecast[2].text);
    $('aside figure:nth-child(3) .high').text(weather.forecast[2].high);
    
    // Forecast Day 4
    $('aside figure:nth-child(4) h2').text(weather.forecast[3].day);
    $('aside figure:nth-child(4) img').attr('src', weather.forecast[3].image);
    $('aside figure:nth-child(4) figcaption').text(weather.forecast[3].text);
    $('aside figure:nth-child(4) .high').text(weather.forecast[3].high);
        
    // Forecast Day 5
    $('aside figure:nth-child(5) h2').text(weather.forecast[4].day);
    $('aside figure:nth-child(5) img').attr('src', weather.forecast[4].image);
    $('aside figure:nth-child(5) figcaption').text(weather.forecast[4].text);
    $('aside figure:nth-child(5) .high').text(weather.forecast[4].high);
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Go Look Outside');
    }
 
});