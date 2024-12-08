const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();

// Enable CORS for all origins
app.use(cors());

app.get('/proxy', (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send('URL is required!');
  }
  request(url).pipe(res);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
