export class Store{

    constructor(){
        this.city;
        this.countryCode;
        this.defaultCity = 'Barcelona';
        this.defaultCountry = 'ES';
    }

    //Load last location. If none, load default one.
    getLocationData(){
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        if (localStorage.getItem('countryCode') === null) {
            this.countryCode = this.defaultCountry;
        } else {
            this.countryCode = localStorage.getItem('countryCode');
        }

        return {
            city: this.city,
            countryCode: this.countryCode
        }
    }

    //Save last location for future use
    setLocationData(city, countryCode){
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }
}