const mail = require("../services/mailSerice");
const db = require("../services/database");

class WeatherController {
  sendConfirmationEmail = async function (req, res) {
    try {
      const city = req.query.mail;
      const result = await weather.getCurrentWeather(city);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  };
}

module.exports = new WeatherController();
