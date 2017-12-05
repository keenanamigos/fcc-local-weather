export class WeatherData {
    constructor(args) {
        this.city = args.city,
        this.country = args.country,
        this.weatherStatus = args.weatherStatus,
        this.temperature = args.temp,
        this.icon = args.weatherIcon
    }
}