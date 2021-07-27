import { format, fromUnixTime } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";

async function populateCurrent(cityObj, currentWeather, dailyWeather) {
  const cityName = document.querySelector(".city-name");
  const cityDate = document.querySelector(".city-date-time");
  const currentTemp = document.querySelector(".current-temp");
  const hiTemp = document.getElementById("hi-temp");
  const loTemp = document.getElementById("lo-temp");
  const weatherIcon = document.getElementById("weather-icon");
  const precip = document.getElementById("precip");

  cityName.textContent = cityObj.name + ", " + cityObj.country;
  // cityDate.textContent = format(
  //   new Date(fromUnixTime(currentWeather.dt - 25200)),
  //   "EEEE, MM/dd/yyyy, h:mm aaa"
  // );
  // const date = getDatePickerValue(); // e.g. 2014-06-25 10:00:00 (picked in any time zone)
  const timeZone = "America/Los_Angeles";
  console.log(
    zonedTimeToUtc(
      new Date(fromUnixTime(currentWeather.dt)),
      "America/Los_Angeles"
    )
  );
  console.log(fromUnixTime(currentWeather.dt));
  cityDate.textContent = zonedTimeToUtc(fromUnixTime(currentWeather.dt));
  currentTemp.textContent = Math.round(currentWeather.temp) + "°F";
  hiTemp.textContent = "Hi: " + Math.round(dailyWeather.temp.max) + "°F";
  loTemp.textContent = "Lo: " + Math.round(dailyWeather.temp.min) + "°F";
  weatherIcon.src = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`;
  precip.textContent = "Precip: " + dailyWeather.pop * 100 + "%";
}

export { populateCurrent };
