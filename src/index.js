import "./style.css";
import { getForecast } from "./api_call";
import { format, fromUnixTime } from "date-fns";

async function test() {
  const weatherData = await getForecast();
  console.log(weatherData);
  console.log(weatherData.daily);
  console.log(weatherData.hourly);
  console.log(format(new Date(fromUnixTime(weatherData.hourly[1].dt)), "h aa"));
}

test();
