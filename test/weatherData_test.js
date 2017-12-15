/* global describe it */
import { expect }  from "chai";
import { WeatherData } from "../src/weatherData";

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