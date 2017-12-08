/* global describe it */
const expect = require("chai").expect;
const Weather = require("../dist/weather").Weather;

describe("Weather", () => {
	describe("convertFahrenheitToCelsius", () => {
		it("should run the calculations and return the proper temperature of 1 degree celsius", () => {
			const FahrenheitTemp = 34.0;
			expect(Weather.convertFahrenheitToCelsius(FahrenheitTemp)).to.equal(1.0);
		});
	});

	describe("convertCelsiusToFahrenheit", () => {
		it("should run the calculations and return the proper temperature of 140 degrees Fahrenheit", () => {
			const celsiusTemp = 60.0;
			expect(Weather.convertCelsiusToFahrenheit(celsiusTemp)).to.equal(140.0);
		});
	});
});