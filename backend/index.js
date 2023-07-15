const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
app.use(cors());

const { getPacks, getCards } = require("./database/db");

app.get("/packs", getPacks);
app.get("/cards", getCards);

const port = process.env.VITE_BACKEND_PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
