import { format, fromUnixTime } from "date-fns";

function populateHourly(hourlyWeather) {
  const hourlyForecast = document.getElementById("hourly-forecast");
  for (let i = 0; i < 24; i++) {
    // if hour= 0 then "Now"
    hourlyForecast.appendChild(createHour(hourlyWeather[i]));
  }
}

function createHour(hourOfWeather) {
  const myHour = document.createElement("div");
  myHour.setAttribute("class", "hour");
  const aTime = document.createElement("div");
  aTime.setAttribute("class", "hour-item");
  aTime.textContent = format(new Date(fromUnixTime(hourOfWeather.dt)), "haaa");
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
export { populateHourly };
