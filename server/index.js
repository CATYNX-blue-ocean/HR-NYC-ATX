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

//landing page
app.get('/landing', function (req, res) {
  database.catFind()
    .then ((data)=> { res.json(data); })
    .catch ((err)=> { res.sendStatus(500); });
});

//post ordered product to database
app.post('/orderpost', function (req, res) {
  database.saveNewOrder(req.body)
    .then ((data)=> { res.sendStatus(201); })
    .catch ((err)=> { res.sendStatus(500); });
});

// Need this so that react router works
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});
app.get('/sign-in', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});
app.get('/sign-up', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});
app.get('/search', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});
app.get('/cart', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});
app.get('/checkout', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});
app.get('/confirmation', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});
app.get('/category/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.get('/categories', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});
app.get('/products-page', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.get('/product-details', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});
app.get('/products-by-category', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});
app.get('/services-by-category', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.get('/products', function (req, res) {
  database.getProductList( function (err, result) {
    if (err) {
      throw err;
    }
    var newProductList = [];

    result.forEach((seller) => {
      seller.products.forEach((product) => {
        product['location'] = seller.location;
        newProductList.push(product);
      });
    });
    res.send(newProductList);
  });
});

app.get('/services', function (req, res) {
  database.getServiceList( function (err, result) {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

//get to make sure seller has an account while logging in
app.get('/sellersignin', (req, res)=> {
  const seller = req.query.sellerEmail;
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
  database.getBuyerLogin( req.query.buyerEmail )
    .then((data) => {
      setTimeout(() => { console.log('Buyer login data ' + data); }, 3000);
      if (data === null) {
        res.status(400).send('Invalid login');
      } else {
        res.status(200).send(data);
      }
    });
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
      res.send('There was an error with your request, Please try again or contact an administrator.');
    });
});

//post for seller account sign up
app.post('/sellersignup', (req, res)=>{
  const newSeller = req.body;

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


// user search for products
app.get('/product/search', (req, res) => {
  let keyword = req.query.keyword;
  database.searchForProducts(keyword, (err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(404);
    }
    if (!result.length) {
      res.json('No matching products for your location.');
    } else {
      let searchProducts = [];
      result.forEach((seller) => {
        seller.products.forEach((product) => {
          if (product.productName.toLowerCase().includes(keyword.toLowerCase())) {
            searchProducts.push(product);
          }
        });
      });
      res.status(200).json(searchProducts);
    }
  });
});

// user search for services - ORIGINAL - querying the SELLERS database
// app.get('/service/search', (req, res) => {
//   let keyword = req.query.keyword;
//   database.searchForServices(keyword, (err, result) => {
//     if (err) {
//       console.error(err);
//       res.sendStatus(404);
//     }
//     if (!result.length) {
//       res.json('No matching services for your location.');
//     } else {
//       let servicesMatch = [];
//       result.forEach((seller) => {
//         seller.services.forEach((service) => {
//           if (service.serviceCategory.toLowerCase().includes(keyword.toLowerCase())) {
//             servicesMatch.push(service);
//           }
//         });
//       });
//       res.status(200).json(servicesMatch);
//     }
//   });
// });



//user search for services -VERSION 2 - Querying SERVICES database
app.get('/service/search', (req, res) => {
  let keyword = req.query.keyword;
  console.log(keyword);
  database.searchServices(keyword, (err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(404);
    }
    let servicesMatch = [];
    result.forEach((seller) => {
      if (seller.serviceCategory.toLowerCase().includes(keyword.toLowerCase())) {
        servicesMatch.push(seller);
      }
    });
    if (!servicesMatch.length) {
      res.json('No matching services for your location.');
    } else {
      res.status(200).json(servicesMatch);
    }
  });
});


app.get('/SellersInCategory', (req, res)=>{
  const queryCategory = req.query.category;

  database.getServiceCategory( queryCategory )
    .then( (doTheyExist) => {
      res.Status = 200;
      res.send(doTheyExist);
    })
    .catch( () => {
      res.status = 401;
      res.send('There was an error with your request, Please try again or contact an administrator.');
    });

});

app.get('/Categories', (req, res)=>{
  database.getAllCategories()
    .then( (list) => {
      res.Status = 200;
      res.send(list);
    })
    .catch( () => {
      res.status = 401;
      res.send('There was an error with your request, Please try again or contact an administrator.');
    });

});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
