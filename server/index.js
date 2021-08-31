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
  const newBuyer = req.body;

  database.checkForBuyer( newBuyer.buyerEmail )
    .then( ( doTheyExist ) => {
      if (doTheyExist === true) {
        res.Status = 201;
        res.send('Account Exists. Please log in.');
      } else {
        database.saveNewBuyer( newBuyer );
        res.Status = 201;
        res.send('Account Created. Please log in.');
      }
    })
    .catch( (err) =>{
      res.status = 401;
      res.send('There was an error with your request, Please try again.');
    });
});

//post for seller account sign up
app.post('/sellersignup', (req, res)=>{

});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
