import { Request, Response } from "express";
import pool from "./index";

function getPacks(req: Request, res: Response) {
  pool.query("SELECT * FROM kanji_categories", (error, results) => {
    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }

    res.status(200).send(results);
  });
}

export { getPacks };
