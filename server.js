const express = require("express");

const cors = require("cors");

const OpenAI = require("openai");

const app = express();

app.use(cors());

app.use(express.json());

const client = new OpenAI({

  apiKey: process.env.OPENAI_API_KEY

});

app.get("/", (req, res) => {

  res.send("AI Backend is working 🚀");

});

app.post("/essay", async (req, res) => {

  try {

    const { topic, words } = req.body;

    const result = await client.chat.completions.create({

      model: "gpt-4o-mini",

      messages: [

        {

          role: "user",

          content: `Write an essay about ${topic} in around ${words} words.`

        }

      ]

    });

    res.json({

      result: result.choices[0].message.content

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      result: "AI error ❌"

    });

  }

});

app.post("/humanize", async (req, res) => {

  try {

    const { text } = req.body;

    const result = await client.chat.completions.create({

      model: "gpt-4o-mini",

      messages: [

        {

          role: "user",

          content: `Rewrite this to sound more human:\n\n${text}`

        }

      ]

    });

    res.json({

      result: result.choices[0].message.content

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      result: "AI error ❌"

    });

  }

});

app.listen(3000, () => {

  console.log("Server running 🚀");

});
