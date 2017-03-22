// http://simpleweatherjs.com/

// Get and store Geo Location lat/long coordinates

if ('geolocation' in navigator) {

   
    
    $('.geo').click( function() {
      
        //load weather using your lat/long coordinates
        navigator.geolocation.getCurrentPosition(function(position) {

            // Check lat/long coordinates
            var lat = position.coords.latitude;
            var long = position.coords.longitude;

            console.log(lat, long);
            $('#homepage').hide();

            // Send to SimpleWeather
            getWeather( lat + ',' + long ); 
        });

});

}

$('.homepage').click(function() {
    $('#homepage').show();
});

$('.cheney').click( function() {
    $('#homepage').hide();
    getWeather('Cheney,WA');
//    $('.cheney').show();

});

//$('body').ready(function () {
//    console.log('inside onready function');
//});

var getWeather = function (location) {
    $.simpleWeather({
        location: location,
        unit: 'f',
        success: function(weather) {
            // Entire weather object
            console.log(weather);

            // Display Today's Weather
            $('.city').text(weather.city);
            $('.state').text(weather.region);
            $('.temp').text(weather.temp);
            $('i').addClass('icon-' + weather.code);

            background(weather);
            forecast(weather);

        },
        error: function (error) {
          // Show if weather cannot be retreived
          console.log('Go Look Outside');
        }

    });
};

var forecast = function (weather) {
    // Forecast Day 1
    $('section figure:nth-child(1) h2').text(weather.forecast[0].day);
    $('section figure:nth-child(1) i').addClass('icon-' + weather.forecast[0].code);
    $('section figure:nth-child(1) figcaption').text(weather.forecast[0].text);
    $('section figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('section figure:nth-child(1) .low').text(weather.forecast[0].low);

    // Forecast Day 2
    $('section figure:nth-child(2) h2').text(weather.forecast[1].day);
    $('section figure:nth-child(2) i').addClass('icon-' + weather.forecast[1].code);
    $('section figure:nth-child(2) figcaption').text(weather.forecast[1].text);
    $('section figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('section figure:nth-child(2) .low').text(weather.forecast[1].low);

    // Forecast Day 3
    $('section figure:nth-child(3) h2').text(weather.forecast[2].day);
    $('section figure:nth-child(3) i').addClass('icon-' + weather.forecast[2].code);
    $('section figure:nth-child(3) figcaption').text(weather.forecast[2].text);
    $('section figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('section figure:nth-child(3) .low').text(weather.forecast[2].low);

    // Forecast Day 4
    $('section figure:nth-child(4) h2').text(weather.forecast[3].day);
    $('section figure:nth-child(4) i').addClass('icon-' + weather.forecast[3].code);
    $('section figure:nth-child(4) figcaption').text(weather.forecast[3].text);
    $('section figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('section figure:nth-child(4) .low').text(weather.forecast[3].low);

    // Forecast Day 5
    $('section figure:nth-child(5) h2').text(weather.forecast[4].day);
    $('section figure:nth-child(5) i').addClass('icon-' + weather.forecast[4].code);
    $('section figure:nth-child(5) figcaption').text(weather.forecast[4].text);
    $('section figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('section figure:nth-child(5) .low').text(weather.forecast[4].low);

    // Forecast Day 6
    $('section figure:nth-child(6) h2').text(weather.forecast[5].day);
    $('section figure:nth-child(6) i').addClass('icon-' + weather.forecast[5].code);
    $('section figure:nth-child(6) figcaption').text(weather.forecast[5].text);
    $('section figure:nth-child(6) .high').text(weather.forecast[5].high);
    $('section figure:nth-child(6) .low').text(weather.forecast[5].low);

    // Forecast Day 7
    $('section figure:nth-child(7) h2').text(weather.forecast[6].day);
    $('section figure:nth-child(7) i').addClass('icon-' + weather.forecast[6].code);
    $('section figure:nth-child(7) figcaption').text(weather.forecast[6].text);
    $('section figure:nth-child(7) .high').text(weather.forecast[6].high);
    $('section figure:nth-child(7) .low').text(weather.forecast[6].low);
};

var background = function (weather) {
    // Sunny Weather BG
    if (weather.code == 30 || weather.code == 32 || weather.code == 34 || weather.code == 36 || weather.code == 44) {
        $('body').addClass('sunny');
    }

    // Cloudy Weather BG
    if (weather.code >= 13 && weather.code <= 17 || weather.code >= 20 && weather.code <= 22 || weather.code >= 26 && weather.code <= 29) {
        $('body').addClass('cloudy');
    }

    // Stormy Weather BG
    if (weather.code >= 1 && weather.code <= 12 || weather.code >= 23 && weather.code <= 24 || weather.code == 35 || weather.code >= 37 && weather.code <= 43 || weather.code >= 45) {
        $('body').addClass('stormy');
    }

    // Cold Weather BG
    if (weather.code == 18 || weather.code == 35) {
        $('body').addClass('cold');
        $('body').removeClass('home');
    }
};

// call Sidr Plugin. Toggle by Default
$('#show-sidr').sidr();

// Close from inside
$('#close').sidr({
  method: 'close'
})