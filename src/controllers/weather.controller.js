const weather = require("../models/weather.model");

class WeatherController {
  getRandomCity = async function (req, res) {
    try {
      const city = req.query.city;
      const result = await weather.getCurrentWeather(city);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  };

  getCurrentWeather = async function (req, res) {
    try {
      const cityIp = req.query.cityIp;
      const result = await weather.getCurrentWeather(cityIp);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  };

  getFutureForecast = async function (req, res) {
    console.log(req.query.city);
    try {
      const city = req.query.city;
      const date = req.query.date; // format yyyy-MM-dd
      const result = await weather.getFutureForecast(city, date);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  };

  searchCity = async function (req, res) {
    try {
      const city = req.query.city;
      const result = await weather.searchCity(city);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  };
}

module.exports = new WeatherController();
