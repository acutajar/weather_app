async function getForecast(cityName) {
  try {
    const cityResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=80bea26c0459eb834622caa9efb78d60`,
      { mode: "cors" }
    );
    const cityData = await cityResponse.json();
    cityData;
    const city = cityData.city;
    const lat = cityData.city.coord.lat;
    const long = cityData.city.coord.lon;
    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=80bea26c0459eb834622caa9efb78d60&units=imperial&exclude=minutely`,
      { mode: "cors" }
    );
    const forecastData = await forecastResponse.json();
    return { forecastData, city };
  } catch (err) {
    alert("No city found. Please try again.");
  }
}

export { getForecast };
