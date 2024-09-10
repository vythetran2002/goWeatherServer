const weatherRouter = require("./weather.router");

function router(app) {
  app.use("/api/", weatherRouter);
}

module.exports = router;
