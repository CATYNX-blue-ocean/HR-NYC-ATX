const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
var cors = require('cors');
const database = require('../Database/database.js');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../dist'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
