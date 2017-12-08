const Weather = require("./weather").Weather;

navigator.geolocation.getCurrentPosition(position => {
	let isFarenheit = false;

	const data = {
		endpoint: "https://fcc-weather-api.glitch.me/",
		longitude: position.coords.longitude,
		latitude: position.coords.latitude
	};

	Weather.getWeatherByLatLong(data);

	const tempBtn = document.getElementById("tempUnit");
	tempBtn.onclick = () => {
		isFarenheit = !isFarenheit;
		switchMeasurements(isFarenheit);
	};
});

function switchMeasurements(measurementBool) {
	const temperature = parseFloat(document.getElementById("temperature").innerHTML);

	if (measurementBool) {
		document.getElementById("temperature").innerHTML = Weather.convertFarenheitToCelsius(temperature);
		document.getElementsByClassName("temp-btn-text")[0].innerHTML = "C";

	} else {
		document.getElementById("temperature").innerHTML = Weather.convertCelsiusToFarenheit(temperature);
		document.getElementsByClassName("temp-btn-text")[0].innerHTML = "F";
	}
}
