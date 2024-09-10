const axios = require("axios");

class WeatherApiServices {
  getCurrentWeather = async function (city) {
    try {
      const response = await axios.get(
        "https://api.weatherapi.com/v1/current.json",
        {
          params: {
            q: city,
            lang: "en",
            key: process.env.API_KEY,
          },
        }
      );
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  };

  getFutureForecast = async function (city, date) {
    try {
      const response = await axios.get(
        "https://api.weatherapi.com/v1/future.json",
        {
          params: {
            q: city,
            dt: date,
            lang: "en",
            key: process.env.API_KEY,
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching weather data: ", error.message);
    }
  };

  searchCity = async function (city) {
    try {
      const response = await axios.get(
        "https://api.weatherapi.com/v1/search.json",
        {
          params: {
            q: city,
            key: process.env.API_KEY,
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching weather data: ", error.message);
    }
  };
}

module.exports = new WeatherApiServices();
