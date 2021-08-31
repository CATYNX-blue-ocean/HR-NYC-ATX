const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
var cors = require('cors');
const database = require('../database/index.js');
const path = require('path'); // need this for the react router enabling code line 17
const db = require('../database/index.js');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../dist'));

// Need this so that react router works
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../dist', 'index.html'));
// });
app.get('/products', function (req, res) {
  db.collection('productListings').find({}).toArray(function(err, result) {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});
app.get('/services', function (req, res) {

});
app.get('/user', function (req, res) {
  // must add query after data is created
});
//get to make sure seller has an account while logging in
app.get('/sellersignin', (req, res)=> {
  console.log(req.body);
  const seller = req.body.sellerEmail;
  database.getSellerLogin( seller )
    .then( (sellerInfo) => {
      if (sellerInfo === null) {
        res.Status = 400;
        res.send('User Not Found.');
      } else {
        res.Status = 200;
        res.send(sellerInfo);
      }
    } )
    .catch((err)=> {

    });

});

//get to make sure buyer has an account while logging in
app.get('/buyersignin', (req, res)=> {

});

//post for buyer account sign up
app.post('/buyersignup', ( req, res ) => {
  const newBuyer = req.body;

  database.checkForBuyer( newBuyer.email )
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
      res.send('There was an error with your request, Please try again or contact an administrator.');
    });
});

//post for seller account sign up
app.post('/sellersignup', (req, res)=>{
  const newSeller = req.body;
  console.log(newSeller);
  database.checkForSeller( newSeller.sellerEmail )
    .then( (doTheyExist) => {
      if (doTheyExist) {
        res.Status = 201;
        res.send('Account already exists.');
      } else {
        database.saveNewSeller( newSeller );
        res.Status = 201;
        res.send('Account Created. Please log in.');
      }
    })
    .catch( () => {
      res.status = 401;
      res.send('There was an error with your request, Please try again or contact an administrator.');
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
