import { Request, Response } from "express";
import pool from "../database";
import { RowDataPacket } from "mysql2";
import questionData from "./questionData.json";

function getQuestion(req: Request, res: Response) {
  try {
    const kanjiId = req.params.kanjiId;

    console.log(kanjiId);

    // Fetch kanji character from database by ID
    pool.query(
      `SELECT kanji FROM kanji_characters WHERE id = ${kanjiId}`,
      (error, results: RowDataPacket[]) => {
        if (error) {
          return res.status(400).json({
            message: error.message,
          });
        }

        // Check if any rows were found
        if (results.length === 0) {
          return res
            .status(404)
            .json({ message: "No kanji found for the provided ID." });
        }

        // Extract the kanji value from the first row (assuming it's the only row returned)
        const kanji = results[0].kanji;

        // Filter the JSON data to find the question with the matching answer
        const selectedQuestion = questionData.find(
          (item: { question: string; answer: string }) => item.answer === kanji
        );

        if (selectedQuestion) {
          // If a matching question is found, send it as the response
          res.status(200).json({
            question: selectedQuestion.question,
            answer: selectedQuestion.answer,
          });
        } else {
          // If no matching question is found, handle the error accordingly
          res
            .status(404)
            .json({ message: "No question found for the selected character." });
        }
      }
    );
  } catch (error) {
    // Handle any errors that occurred during the process
    res.status(500).json({ message: "Internal server error." });
  }
}

export { getQuestion };
