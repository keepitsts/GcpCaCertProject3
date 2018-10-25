'use strict';

const express = require('express');
const path = require('path');

const app = express();
// return static file
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve('index.html'));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
