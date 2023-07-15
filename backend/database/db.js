const mysql = require("mysql2");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const connection = mysql.createConnection({
  host: "kanji-cards-database-1",
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

function getPacks(req, res) {
  try {
    connection.query("SELECT * FROM kanji_categories", (error, results) => {
      if (error) {
        res.send(error);
        return;
      }

      res.send(results);
    });
  } catch (error) {
    res.send(error);
  }
}

function getCards(req, res) {
  try {
    connection.query("SELECT * FROM kanji_characters", (error, results) => {
      if (error) {
        res.send(error);
        return;
      }

      res.send(results);
    });
  } catch (error) {
    res.send(error);
  }
}

module.exports = { getPacks, getCards };
