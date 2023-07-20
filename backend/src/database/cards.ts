import { Request, Response } from "express";
import pool from "./index";

function getCards(req: Request, res: Response) {
  pool.query("SELECT * FROM kanji_characters", (error, results) => {
    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }

    res.status(200).send(results);
  });
}

export { getCards };
