const service = require("../services/weatherApiSerivces");

class Weather {
  getCurrentWeather = async function (cityIp) {
    try {
      const response = await service.getCurrentWeather(cityIp);
      return response;
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  };

  getFutureForecast = async function (city, date) {
    try {
      const response = await service.getFutureForecast(city, date);
      return response;
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  };

  searchCity = async function (city) {
    try {
      const response = await service.searchCity(city);
      return response;
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  };
}

module.exports = new Weather();
