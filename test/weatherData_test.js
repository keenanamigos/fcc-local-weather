/* global describe it */
const expect = require("chai").expect;
const WeatherData = require("../dist/weatherData").WeatherData;

describe("WeatherData", () => {
	describe("create", () => {
		it("should return an instance of the WeatherData class", () => {
			const weatherData = {
				city: "Osaka",
				country: "JP",
				weatherStatus: "Clear",
				temp: "13",
				icon: "someString"
			};

			expect(WeatherData.create(weatherData)).to.be.instanceof(WeatherData);
		});
	});
});