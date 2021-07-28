import { format, fromUnixTime } from "date-fns";

function populateHourly(hourlyWeather, cityObj) {
  const hourlyForecast = document.getElementById("hourly-forecast");
  while (hourlyForecast.firstChild) {
    hourlyForecast.removeChild(hourlyForecast.firstChild);
  }
  for (let i = 0; i < 24; i++) {
    // if hour= 0 then "Now"
    hourlyForecast.appendChild(createHour(hourlyWeather[i], cityObj));
  }
}

function createHour(hourOfWeather, cityObj) {
  const myHour = document.createElement("div");
  myHour.setAttribute("class", "hour");
  const aTime = document.createElement("div");
  aTime.setAttribute("class", "hour-item");
  aTime.textContent = format(
    new Date(
      fromUnixTime(hourOfWeather.dt + cityObj.timezone)
        .toUTCString()
        .slice(0, -3)
    ),
    "haaa"
  );
  const aTemp = document.createElement("div");
  aTemp.setAttribute("class", "hour-item");
  aTemp.textContent = Math.round(hourOfWeather.temp) + "°";
  const weatherIcon = document.createElement("img");
  weatherIcon.setAttribute("class", "cropped-icon");
  weatherIcon.src = `https://openweathermap.org/img/wn/${hourOfWeather.weather[0].icon}.png`;
  const precip = document.createElement("div");
  precip.setAttribute("class", "hour-item");
  precip.textContent = Math.round(hourOfWeather.pop * 10) * 10 + "%";

  myHour.append(aTime, precip, weatherIcon, aTemp);
  return myHour;
}

export { populateHourly };
