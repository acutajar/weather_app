import "./style.css";
import { getForecast } from "./api_call";
import { populateCurrent } from "./current.js";
import { populateDaily } from "./daily.js";
import { populateHourly } from "./hourly.js";

let cityName = "san francisco";

loadWeather(cityName);

async function loadWeather(aCity) {
  const weatherData = await getForecast(aCity);
  const cityInfo = weatherData.city;
  const currentWeather = weatherData.forecastData.current;
  const dailyWeather = weatherData.forecastData.daily;
  const hourlyWeather = weatherData.forecastData.hourly;
  console.log(currentWeather);
  console.log(hourlyWeather);
  populateCurrent(cityInfo, currentWeather, dailyWeather[0]);
  populateDaily(dailyWeather);
  populateHourly(hourlyWeather);
}
