const mongoose = require('mongoose');
const dbInfo = require('../config.js');
mongoose.connect(`mongodb://${dbInfo.dbInfo}`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error to Mongo:'));
db.once('open', function() {
  console.log('Connected to MongoDB!');
});

const productListing = mongoose.Schema({
  productID: Number, //OR Obj_id
  productName: String,
  productCategory: String,
  productDescription: String,
  inventory: String, // TO BE DECIDED: '' or {}
  productImage: [String],
  trending: Boolean,
  ratings: [Number],
});

const serviceListing = mongoose.Schema({
  serviceID: Number, //OR Obj_id
  serviceName: String,
  serviceCategory: String,
  //categoryImage: String, //CAN BE PUT IN FRONTEND
  serviceDescription: String,
  serviceAvailability: String,
  trending: Boolean, // true/false for landing page
  ratings: [Number],
});

const sellerSchema = mongoose.Schema({
  //seller_id: Number, //OPTIONAL, could use unique names
  sellerName: String,
  sellerEmail: String,
  sellerAddress: String,
  location: [String], //['latitude', 'longitude']
  sellerPhone: Number,
  password: String, // hashed
  createdAt: Date,
  orders: [Number],
  products: productListing,
  services: serviceListing,
});

const buyerSchema = mongoose.Schema({
  //buyer_id: Number, //OPTIONAL, could use unique names
  buyerName: String,
  password: String, // hashed
  buyerEmail: String,
  buyerPhone: Number,
  buyerAddress: String,
  orders: [Number]
});

const orderSchema = mongoose.Schema({
  orderID: Number,
  sellerName: String,
  buyerName: String,
  productID: Number,
  shippingAddress: String,
  paymentInfo: String,
});

const categoriesSchema = mongoose.Schema({
  type: String,
  category: String,
  image: String,
  description: String,
});


const Sellers = mongoose.model('Sellers', sellerSchema);
const Buyers = mongoose.model('Buyers', buyerSchema);
const Orders = mongoose.model('Orders', orderSchema);
const Categories = mongoose.model('Categories', categoriesSchema);

const getSellerLogin = async (name) =>  {
  var oneSeller = await Sellers.findOne({sellerName: name});
  return oneSeller;
}

const getServiceCategory = async (category) =>  {
  var allSellers = await Sellers.find();
  console.log('test two ', allSellers);
  return allSellers;
}
//getServiceCategory ('Plumbing'); //consult with Justin in the morning Error: 'Method "collection.find()" accepts at most two arguments'

module.exports = {
  getSellerLogin,
  getServiceCategory,
};

//buyer = 'undefined undefined';
//category = 'Plumbing'; //type service
//orders = empty;
//repos =
//seller = 'Joe String'
