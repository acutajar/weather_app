import "./style.css";
import { getForecast } from "./api_call";

async function test() {
  const weatherData = await getForecast();
  console.log(weatherData.current);
  console.log(weatherData.daily);
  console.log(weatherData.hourly);
}

test();
