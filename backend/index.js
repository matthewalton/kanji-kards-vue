const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
app.use(cors());

const port = process.env.VITE_BACKEND_PORT;

app.get("/", (req, res) => {
  res.header(
    "Access-Control-Allow-Origin",
    `http://${process.env.VITE_HOST}:${process.env.VITE_FRONTEND_PORT}`
  );
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
