const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(cors());

const port = 3001; // Choose a different port than your React app

app.use('/api/v1/chat/completions', createProxyMiddleware({
  target: 'https://api.openai.com',
  changeOrigin: true, // Important for handling CORS
  pathRewrite: {
    '^/api/v1/chat/completions': '/v1/chat/completions'
  }
}));

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});