const express = require("express");
const OpenAI = require("openai");
const app = express();
app.use(express.json());

const openai=new OpenAI({
    apiKey:"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"
})

app.post('/getResponse', async (req, res) => {
  try {
    const { studentid } = req.body;

    // Generate the recommendation letter using OpenAI
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Generate a recommendation letter for a student with ID ${studentid}`,
        },
      ],
    });

    const recommendationLetter = response.choices[0].message.content;

    // Return the generated letter in the response
    res.json({ recommendationLetter });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

// mongdo db data api 
// ...

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})