/* global describe it */
import { expect } from "chai";
import { Weather } from "../src/weather";

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