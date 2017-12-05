"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WeatherData = exports.WeatherData = function WeatherData(args) {
    _classCallCheck(this, WeatherData);

    this.city = args.city, this.country = args.country, this.weatherStatus = args.weatherStatus, this.temperature = args.temp, this.icon = args.weatherIcon;
};