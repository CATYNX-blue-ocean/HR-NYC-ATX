const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../dist'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});