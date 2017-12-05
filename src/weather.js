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
        
        Weather.setHTML(weatherData);
    }

    /* Should take a temperature and a string containing the measurement */
    static convertFarenheitToCelsius(temperature) {
        return Math.round(((5 /9) * (temperature - 32)));
    }

    /* Should take a temperature and a string containing the measurement */
    static convertCelsiusToFarenheit(temperature) {
        return Math.round(((9 * temperature + (32 * 5)) / 5));
    }
    static setHTML(data) {
        const weatherData = WeatherData.create(data);
        // Update
    }
}





