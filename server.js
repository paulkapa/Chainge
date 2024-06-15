// Chainge

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./database'); // Require the database module

app.get('/', (req, res) => {
  db.query('SELECT * FROM your_table', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

/*app.get('/', (req, res) => {
  res.send('Hello World!');
});*/

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});