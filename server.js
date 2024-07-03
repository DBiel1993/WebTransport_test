const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve the client.html file for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client.html'));
});

// Serve static files
app.use(express.static(path.join(__dirname, '.')));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});