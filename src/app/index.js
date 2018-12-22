const { Weather } = require('./weather');
const { UI } = require('./ui');
const { Store } = require('./store');

const store = new Store();
const { city, countryCode } = store.getLocationData();
const ui = new UI();
const weather = new Weather(city, countryCode);

require('./index.css');

async function fetchWeather() {
    const data = await weather.getWeather();
    ui.render(data);
};

//Listen to form
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    weather.seekLocation(city, countryCode);
    store.setLocationData(city, countryCode);
    fetchWeather();
    e.preventDefault();
});
//On document loaded, load fetchWeather.
document.addEventListener('DOMContentLoaded', fetchWeather);