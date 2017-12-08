const WeatherData = require("./weatherData").WeatherData;

export class Weather {
	static getWeatherByLatLong(data) {
		const xhr = new XMLHttpRequest();
		xhr.addEventListener("load", () => {
			const loading = document.getElementsByClassName("loading")[0];
			loading.style.display = "none";
		});
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
		};
        
		Weather.setHTML(weatherData);
	}

	static convertFahrenheitToCelsius(temperature) {
		return Math.round(((5 /9) * (temperature - 32)));
	}

	static convertCelsiusToFahrenheit(temperature) {
		return Math.round(((9 * temperature + (32 * 5)) / 5));
	}
	static setHTML(data) {
		const weatherData = WeatherData.create(data);
        
		const cityCountry = document.getElementById("cityCountry");
		cityCountry.innerHTML = `${weatherData.city}, ${weatherData.country}`;

		const temperature = document.getElementById("temperature");
		temperature.innerHTML = `${weatherData.temperature.toFixed(0)}`;

		const degree = document.getElementById("degree");
		degree.innerHTML = "&deg";

		const tempBtnText = document.getElementsByClassName("temp-btn-text")[0];
		tempBtnText.innerHTML = "C";
        
		const weatherStatus = document.getElementById("weatherStatus");
		weatherStatus.innerHTML = weatherData.weatherStatus;
		weatherStatus.className = "weatherStatus";

		const icon = document.getElementById("icon");
		icon.src = weatherData.icon;
		icon.alt = "icon for the current weather conditons";
		icon.className = "icon";
	}
}





