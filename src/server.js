/*const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

let question = "What is the capital city of France?";
let image = "https://example.com/image.jpg";

app.get("/api/question", (req, res) => {
  res.json({
    question: question,
    image: image,
  });
});

app.post("/api/change-question", (req, res) => {
  const newQuestion = req.body.question;
  const newImage = req.body.image;

  question = newQuestion;
  image = newImage;

  res.json({
    question: question,
    image: image,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
*/
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

let question = "What is the capital city of France?";
let image = "https://example.com/image.jpg";

app.get("/api/question", (req, res) => {
  res.json({
    question: question,
    image: image,
  });
});

app.post("/api/change-question", (req, res) => {
  const newQuestion = req.body.question;
  const newImage = req.body.image;

  // Write new question to file
  fs.writeFile("new-question.txt", newQuestion, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Failed to write new question" });
    }

    // Update question and image variables
    question = newQuestion;
    image = newImage;

    res.json({
      question: question,
      image: image,
    });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
