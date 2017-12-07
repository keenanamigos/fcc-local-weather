"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectHelper = require("./helpers/objectHelper").ObjectHelper;

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
//# sourceMappingURL=weatherData.js.map
