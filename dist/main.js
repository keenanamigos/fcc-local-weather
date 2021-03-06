/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Weather = __webpack_require__(1).Weather;

navigator.geolocation.getCurrentPosition(function (position) {
	var isFahrenheit = false;

	var data = {
		endpoint: "https://fcc-weather-api.glitch.me/",
		longitude: position.coords.longitude,
		latitude: position.coords.latitude
	};

	Weather.getWeatherByLatLong(data);

	var tempBtn = document.getElementById("tempUnit");
	tempBtn.onclick = function () {
		switchMeasurements(isFahrenheit);
		isFahrenheit = !isFahrenheit;
	};
});

function switchMeasurements(measurementBool) {
	var temperature = parseInt(document.getElementById("temperature").innerHTML, 10);

	if (measurementBool) {
		document.getElementById("temperature").innerHTML = Weather.convertFahrenheitToCelsius(temperature);
		document.getElementsByClassName("temp-btn-text")[0].innerHTML = "C";
	} else {
		document.getElementById("temperature").innerHTML = Weather.convertCelsiusToFahrenheit(temperature);
		document.getElementsByClassName("temp-btn-text")[0].innerHTML = "F";
	}
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WeatherData = __webpack_require__(2).WeatherData;

var Weather = exports.Weather = function () {
	function Weather() {
		_classCallCheck(this, Weather);
	}

	_createClass(Weather, null, [{
		key: "getWeatherByLatLong",
		value: function getWeatherByLatLong(data) {
			var xhr = new XMLHttpRequest();
			xhr.addEventListener("load", function () {
				var loading = document.getElementsByClassName("loading")[0];
				loading.style.display = "none";

				var loadingAnimation = document.getElementsByClassName("loader")[0];
				loadingAnimation.style.display = "none";
			});
			var route = "api/current?lon=" + encodeURIComponent(data.longitude) + "&lat=" + encodeURIComponent(data.latitude);
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectHelper = __webpack_require__(3).ObjectHelper;

var WeatherData = exports.WeatherData = function () {
	function WeatherData(args) {
		_classCallCheck(this, WeatherData);

		this.city = args.city, this.country = args.country, this.weatherStatus = args.weatherStatus, this.temperature = args.temp, this.icon = args.icon;
	}

	_createClass(WeatherData, null, [{
		key: "create",
		value: function create(data) {
			if (!ObjectHelper.isObjectNullOrEmpty(data)) {
				return new WeatherData(data);
			}
		}
	}]);

	return WeatherData;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectHelper = exports.ObjectHelper = function () {
	function ObjectHelper() {
		_classCallCheck(this, ObjectHelper);
	}

	_createClass(ObjectHelper, null, [{
		key: "isObjectNullOrEmpty",
		value: function isObjectNullOrEmpty(object) {
			if (object === null || typeof object === "undefined") return true;

			if (object.constructor !== Object) throw new TypeError(object + " is not an Object.");

			if (Object.keys(object).length === 0 && object.constructor === Object) return true;

			return false;
		}
	}]);

	return ObjectHelper;
}();

/***/ })
/******/ ]);