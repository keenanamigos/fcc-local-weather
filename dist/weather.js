"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WeatherData = require("./weatherData").WeatherData;

var Weather = exports.Weather = function () {
	function Weather() {
		_classCallCheck(this, Weather);
	}

	_createClass(Weather, null, [{
		key: "getWeatherByLatLong",
		value: function getWeatherByLatLong(data) {
			var xhr = new XMLHttpRequest();
			var route = "api/current?lon=" + data.longitude + "&lat=" + data.latitude;
			xhr.open("GET", "" + data.endpoint + route, false);
			xhr.send();
			var response = JSON.parse(xhr.responseText);

			var weatherData = {
				city: response.name,
				country: response.sys.country,
				weatherStatus: response.weather[0].main,
				temp: response.main.temp,
				icon: response.weather[0].icon
			};

			Weather.setHTML(weatherData);
		}
	}, {
		key: "convertFahrenheitToCelsius",
		value: function convertFahrenheitToCelsius(temperature) {
			return Math.round(5 / 9 * (temperature - 32));
		}
	}, {
		key: "convertCelsiusToFahrenheit",
		value: function convertCelsiusToFahrenheit(temperature) {
			return Math.round((9 * temperature + 32 * 5) / 5);
		}
	}, {
		key: "setHTML",
		value: function setHTML(data) {
			var weatherData = WeatherData.create(data);

			var cityCountry = document.getElementById("cityCountry");
			cityCountry.innerHTML = weatherData.city + ", " + weatherData.country;

			var temperature = document.getElementById("temperature");
			temperature.innerHTML = "" + weatherData.temperature.toFixed(0);

			var degree = document.getElementById("degree");
			degree.innerHTML = "&deg";

			var tempBtnText = document.getElementsByClassName("temp-btn-text")[0];
			tempBtnText.innerHTML = "C";

			var weatherStatus = document.getElementById("weatherStatus");
			weatherStatus.innerHTML = weatherData.weatherStatus;
			weatherStatus.className = "weatherStatus";

			var icon = document.getElementById("icon");
			icon.src = weatherData.icon;
			icon.alt = "icon for the current weather conditons";
			icon.className = "icon";
		}
	}]);

	return Weather;
}();