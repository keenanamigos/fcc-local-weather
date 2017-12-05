/* global describe it */
const expect = require("chai").expect;
const Weather = require("../dist/weather").Weather;

describe("Weather", () => {
    describe("convertFarenheitToCelsius", () => {
        it("should run the calculations and return the proper temperature of 1 degree celsius", () => {
            const farenheitTemp = 34.0;
            expect(Weather.convertFarenheitToCelsius(farenheitTemp)).to.equal(1.0);
        });
    });

    describe("convertCelsiusToFarenheit", () => {
        it("should run the calculations and return the proper temperature of 140 degrees farenheit", () => {
            const celsiusTemp = 60.0;
            expect(Weather.convertCelsiusToFarenheit(celsiusTemp)).to.equal(140.0);
        });
    });
});