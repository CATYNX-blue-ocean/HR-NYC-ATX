const db = require('../database/index');

module.exports = {
  buyerSignup: function ( req, res ) {
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
  },
  sellerSignUp: function (req, res) {
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
  }
};