const Weather = require("./weather").Weather;

navigator.geolocation.getCurrentPosition(position => {
	const data = {
		endpoint: "https://fcc-weather-api.glitch.me/",
		longitude: position.coords.longitude,
		latitude: position.coords.latitude
	};

	Weather.getWeatherByLatLong(data);

	// Target C/F button and run below function on click
});


// Create a switchMeasurements function 
