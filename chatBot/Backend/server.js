import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
  apiKey: process.env.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,
});
const openai = new OpenAIApi(configuration);

app.post('/api/chatbot', async (req, res) => {
  const { input } = req.body;

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `You are a helpful assistant. Answer the following question: ${input}`,
    temperature: 0.5,
    max_tokens: 100,
  });

  res.json({ message: completion.data.choices[0].text });
});

app.listen(port, () => {
  console.log(`Chatbot server listening at http://localhost:${port}`);
});