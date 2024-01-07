const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log("in root")
    res.send('Home Page');
});

app.listen(8000, () => {
  console.log('Listening on port 8000');
});