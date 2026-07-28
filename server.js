const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

  res.send("AI Backend is working 🚀");

});

app.post("/essay", (req, res) => {

  const { topic, words } = req.body;

  res.json({

    result: `Essay about ${topic} (${words} words):\n\nThis is where the AI generated essay will appear.`

  });

});

app.post("/humanize", (req, res) => {

  const { text } = req.body;

  res.json({

    result: `Humanized version:\n\n${text}`

  });

});

app.listen(3000, () => {

  console.log("Server running 🚀");

});
