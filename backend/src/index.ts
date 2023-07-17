import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const app = express();
app.use(cors());

import { getPacks, getCards } from "./db";

app.get("/packs", getPacks);
app.get("/cards", getCards);

const port = process.env.VITE_BACKEND_PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
