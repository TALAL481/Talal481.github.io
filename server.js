const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {

  res.send("AI Tools Backend is working 🚀");

});

app.listen(3000, () => {

  console.log("Server running");

});
