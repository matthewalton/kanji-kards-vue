import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { getPacks } from "./database/packs";
import { getCards } from "./database/cards";
import { getQuestion } from "./questions";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
app.use(cors());
app.use(express.json());

app.get("/packs", getPacks);
app.get("/cards", getCards);
app.get("/get-question/:kanjiId", getQuestion);

const port = process.env.VITE_BACKEND_PORT;
app.listen(port, () => {
  console.log(`Server is running on http://${process.env.VITE_HOST}:${port}`);
});
