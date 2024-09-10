const express = require("express");
const weatherController = require("../controllers/weather.controller");

const router = express.Router();
router.get("/randomCity", weatherController.getRandomCity);
router.get("/currentCity", weatherController.getCurrentWeather);
router.get("/futureForecast", weatherController.getFutureForecast);
router.get("/search", weatherController.searchCity);
module.exports = router;
