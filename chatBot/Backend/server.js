const { createProxyMiddleware } = require('http-proxy-middleware');

const app = require('express')();

const port = 3001; // Choose a different port than your React app

app.use('/api', createProxyMiddleware({
  target: 'http://api.openai.com',
  changeOrigin: true, // Important for handling CORS
}));

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
