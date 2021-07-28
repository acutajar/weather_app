import "./style.css";
import { getForecast } from "./api_call";
import { populateCurrent } from "./current.js";
import { populateDaily } from "./daily.js";
import { populateHourly } from "./hourly.js";

const citySearch = document.getElementById("city-search");
const btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener("click", () => {
  let searchTerm = citySearch.value.trim();
  loadWeather(searchTerm);
});

(function onLoad() {
  loadWeather("Charlotte");
})();

async function loadWeather(aCity) {
  const weatherData = await getForecast(aCity);
  const cityInfo = weatherData.city;
  const currentWeather = weatherData.forecastData.current;
  const dailyWeather = weatherData.forecastData.daily;
  const hourlyWeather = weatherData.forecastData.hourly;
  populateCurrent(cityInfo, currentWeather, dailyWeather[0]);
  populateDaily(dailyWeather, cityInfo);
  populateHourly(hourlyWeather, cityInfo);
}
