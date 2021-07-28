import { format, fromUnixTime } from "date-fns";

async function populateCurrent(cityObj, currentWeather, dailyWeather) {
  const cityName = document.querySelector(".city-name");
  const cityDate = document.querySelector(".city-date-time");
  const currentTemp = document.querySelector(".current-temp");
  const hiTemp = document.getElementById("hi-temp");
  const loTemp = document.getElementById("lo-temp");
  const weatherIcon = document.getElementById("weather-icon");
  const precip = document.getElementById("precip");

  cityName.textContent = cityObj.name + ", " + cityObj.country;
  cityDate.textContent = format(
    new Date(
      fromUnixTime(currentWeather.dt + cityObj.timezone)
        .toUTCString()
        .slice(0, -3)
    ),
    "EEEE, MM/dd/yyyy, h:mm aaa"
  );
  currentTemp.textContent = Math.round(currentWeather.temp) + "°F";
  hiTemp.textContent = "Hi: " + Math.round(dailyWeather.temp.max) + "°F";
  loTemp.textContent = "Lo: " + Math.round(dailyWeather.temp.min) + "°F";
  weatherIcon.src = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`;
  precip.textContent = "Precip: " + dailyWeather.pop * 100 + "%";
}

export { populateCurrent };
