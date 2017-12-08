const Weather = require("./weather").Weather;

navigator.geolocation.getCurrentPosition(position => {
	let isFahrenheit = false;

	const data = {
		endpoint: "https://fcc-weather-api.glitch.me/",
		longitude: position.coords.longitude,
		latitude: position.coords.latitude
	};

	Weather.getWeatherByLatLong(data);

	const tempBtn = document.getElementById("tempUnit");
	tempBtn.onclick = () => {
		switchMeasurements(isFahrenheit);
		isFahrenheit = !isFahrenheit;
	};
});

function switchMeasurements(measurementBool) {
	const temperature = parseInt(document.getElementById("temperature").innerHTML, 10);

	if (measurementBool) {
		document.getElementById("temperature").innerHTML = Weather.convertFahrenheitToCelsius(temperature);
		document.getElementsByClassName("temp-btn-text")[0].innerHTML = "C";

	} else {
		document.getElementById("temperature").innerHTML = Weather.convertCelsiusToFahrenheit(temperature);
		document.getElementsByClassName("temp-btn-text")[0].innerHTML = "F";
	}
}
