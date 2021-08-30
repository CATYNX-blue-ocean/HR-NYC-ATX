const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
var cors = require('cors');
const database = require('../database/index.js');
const path = require('path'); // need this for the react router enabling code line 17

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../dist'));

// Need this so that react router works
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});
app.get('/products', function (req, res) {
  // must add query after data is created
});
app.get('/services', function (req, res) {
  // must add query after data is created
});
app.get('/user', function (req, res) {
  // must add query after data is created
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
