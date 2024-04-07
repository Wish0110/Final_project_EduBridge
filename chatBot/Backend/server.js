const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(cors());

const port = 3001; // Choose a different port than your React app

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

app.use(limiter);

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

//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