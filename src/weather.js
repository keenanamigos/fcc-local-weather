const WeatherData = require("./weatherData").WeatherData;

export class Weather {
    static getWeatherByLatLong(data) {
        const xhr = new XMLHttpRequest();
        const route = `api/current?lon=${data.longitude}&lat=${data.latitude}`;
        xhr.open("GET", `${data.endpoint}${route}`, false);
        xhr.send();
        const response = JSON.parse(xhr.responseText);
        
        const weatherData = {
            city: response.name,
            country: response.sys.country,
            weatherStatus: response.weather[0].main,
            temp: response.main.temp,
            icon: response.weather[0].icon
        }
        
        // Weather.setHTML(weatherData);
    }

    /* Should take a temperature and a string containing the measurement */
    static convertFarenheitToCelsius(temperature) {
        // Update
    }

    /* Should take a temperature and a string containing the measurement */
    static convertCelsiusToFarenheit(temperature) {
        // Update
    }
    static setHTML(data) {
        const WeatherData = new WeatherData(data);
        // Update
    }
}





