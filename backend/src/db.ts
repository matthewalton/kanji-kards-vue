import mysql from "mysql2";
import dotenv from "dotenv";
import path from "path";
import { Request, Response, NextFunction } from "express";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const pool = mysql.createPool({
  host: "kanji-cards-database-1",
  port: Number(process.env.MYSQL_PORT),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

function getPacks(req: Request, res: Response, next: NextFunction) {
  pool.query("SELECT * FROM kanji_categories", (error, results) => {
    if (error) {
      return next(error);
    }

    res.send(results);
  });
}

function getCards(req: Request, res: Response, next: NextFunction) {
  pool.query("SELECT * FROM kanji_characters", (error, results) => {
    if (error) {
      return next(error);
    }

    res.send(results);
  });
}

export { getPacks, getCards };
