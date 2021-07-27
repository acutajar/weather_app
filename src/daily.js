import { format, fromUnixTime } from "date-fns";

function populateDaily(dailyWeather) {
  const dailyForecast = document.getElementById("daily-forecast");
  for (let i = 1; i < 8; i++) {
    dailyForecast.appendChild(createDay(dailyWeather[i]));
  }
}

function createDay(dayOfWeather) {
  const myDay = document.createElement("div");
  myDay.setAttribute("class", "day");
  const aDayOfWeek = document.createElement("div");
  aDayOfWeek.textContent = format(
    new Date(fromUnixTime(dayOfWeather.dt)),
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
