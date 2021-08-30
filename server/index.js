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

//post for buyer account sign up
app.post('/buyersignup', ( req, res ) => {
  console.log(req.body);
  const newBuyer = req.body;

  database.getBuyerLogin(newBuyer.buyerEmail)
    .then( match => {
      res.Status = 400;
      res.send(`Email already associated with an account: ${match.buyerEmail}`);
    })
    .catch(()=>{
      database.saveNewBuyer(newBuyer);
      res.send('Account Created. Please log in.');
    });

});
//post for seller account sign up
app.post('/sellersignup', (req, res)=>{

});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
