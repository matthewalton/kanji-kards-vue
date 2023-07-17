const mysql = require("mysql2");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const pool = mysql.createPool({
  host: "kanji-cards-database-1",
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10, // Adjust the limit based on your needs
  queueLimit: 0,
});

function getPacks(req, res, next) {
  pool.query("SELECT * FROM kanji_categories", (error, results) => {
    if (error) {
      return next(error);
    }

    res.send(results);
  });
}

function getCards(req, res, next) {
  pool.query("SELECT * FROM kanji_characters", (error, results) => {
    if (error) {
      return next(error);
    }

    res.send(results);
  });
}

module.exports = { getPacks, getCards };
