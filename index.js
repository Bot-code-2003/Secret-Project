import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/access", (req, res) => {
  if (req.body["code"] === "1111") {
    res.sendFile(__dirname + "/secret.html");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});

app.listen(port);
