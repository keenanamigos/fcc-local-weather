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
    var data = {
        endpoint: "https://fcc-weather-api.glitch.me/",
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
    };

    Weather.getWeatherByLatLong(data);
});

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

                // Weather.setHTML(weatherData);
            };
        }

        /* Should take a temperature and a string containing the measurement */

    }, {
        key: "convertFarenheitToCelsius",
        value: function convertFarenheitToCelsius(temperature) {}
        // Update


        /* Should take a temperature and a string containing the measurement */

    }, {
        key: "convertCelsiusToFarenheit",
        value: function convertCelsiusToFarenheit(temperature) {
            // Update
        }
    }, {
        key: "setHTML",
        value: function setHTML(data) {
            var WeatherData = new WeatherData(data);
            // Update
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WeatherData = exports.WeatherData = function WeatherData(args) {
    _classCallCheck(this, WeatherData);

    this.city = args.city, this.country = args.country, this.weatherStatus = args.weatherStatus, this.temperature = args.temp, this.icon = args.weatherIcon;
};

/***/ })
/******/ ]);