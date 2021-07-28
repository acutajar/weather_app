import { format, fromUnixTime } from "date-fns";

function populateDaily(dailyWeather, cityObj) {
  const dailyForecast = document.getElementById("daily-forecast");
  while (dailyForecast.firstChild) {
    dailyForecast.removeChild(dailyForecast.firstChild);
  }
  for (let i = 1; i < 8; i++) {
    dailyForecast.appendChild(createDay(dailyWeather[i], cityObj));
  }
}

function createDay(dayOfWeather, cityObj) {
  const myDay = document.createElement("div");
  myDay.setAttribute("class", "day");
  const aDayOfWeek = document.createElement("div");
  aDayOfWeek.textContent = format(
    new Date(
      fromUnixTime(dayOfWeather.dt + cityObj.timezone)
        .toUTCString()
        .slice(0, -3)
    ),
    "eeee"
  );
  const hiTemp = document.createElement("div");
  hiTemp.textContent = "Hi: " + Math.round(dayOfWeather.temp.max) + "°";
  const loTemp = document.createElement("div");
  loTemp.textContent = "Lo: " + Math.round(dayOfWeather.temp.min) + "°";
  const weatherIcon = document.createElement("img");
  weatherIcon.setAttribute("class", "cropped-icon");
  weatherIcon.src = `https://openweathermap.org/img/wn/${dayOfWeather.weather[0].icon}.png`;
  const precip = document.createElement("div");
  precip.textContent = Math.round(dayOfWeather.pop * 10) * 10 + "%";

  myDay.append(aDayOfWeek, hiTemp, loTemp, weatherIcon, precip);
  return myDay;
}
export { populateDaily };
