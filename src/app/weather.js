export class Weather{
    
    constructor(city, countryCode){
        this.apiKey = '39ae29584bc5b3cb358e449752f5a6aa';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather(){
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apiKey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }

    seekLocation(city, countryCode){
        this.city = city;
        this.countryCode = countryCode;
    }
}