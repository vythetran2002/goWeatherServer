require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createPool({
  host: process.env.HostDB,
  user: process.env.UserDB,
  password: process.env.PassDB,
  database: process.env.DBName,
  port: process.env.PORT_DB,
  waitForConnections: true,
  maxIdle: 10, // connection limit
  queueLimit: 0,
});

connection.getConnection((error) => {
  if (error) {
    console.error("Connection error:", error);
  } else {
    console.log("connect successfully!");
  }
});

module.exports = connection;
