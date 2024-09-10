const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const router = require("./routes/index.route");
var cors = require("cors");
const port = process.env.PORT || 8081;

const corsOption = {
  origin: ["http://localhost:3000"],
  // origin: 'https://techwave-fe.vercel.app/',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: "Content-Type,Authorization",
  exposedHeaders: ["x-auth-token"],
};

app.use(cors(corsOption));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router(app);
// start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
