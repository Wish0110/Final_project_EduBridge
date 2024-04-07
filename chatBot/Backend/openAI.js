const axios = require('axios');

const apiKey = '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';
const url = 'https://api.openai.com/v1/completions';

const getResponse = async (question) => {
  const data = {
    prompt: question,
    max_tokens: 100,
    temperature: 0.5,
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
  };

  try {
    const response = await axios.post(url, data, config);
    return response.data.choices[0].text;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getResponse };