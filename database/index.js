const mongoose = require('mongoose');
const dbInfo = require('../config');
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
  sellerPhone: String,
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
  buyerPhone: String,
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

const getSellerLogin = async ( email ) =>  {
  return await Sellers.findOne({ sellerEmail: email });
}

const getServiceCategory = async (category) =>  {
  var allSellers = await Sellers.find();
  console.log('test two ', allSellers);
  return allSellers;
}
//getServiceCategory ('Plumbing'); //consult with Justin in the morning Error: 'Method "collection.find()" accepts at most two arguments'

const getBuyerLogin = async ( buyerEmail ) => {
  return await db.buyerSchema.find({ buyerEmail })
};


const checkForBuyer = ( buyerEmail ) => {
  return Buyers.exists({ buyerEmail })
};

const checkForSeller = ( sellerEmail ) => {
  return Sellers.exists({ sellerEmail })
};

const saveNewBuyer = ( buyerInfo ) => {
  const newUser = new Buyers( {
      buyerName: buyerInfo.buyerFirstName + ' ' + buyerInfo.buyerLastName,
      password: buyerInfo.password,
      buyerEmail: buyerInfo.buyerEmail,
      buyerPhone: buyerInfo.buyerPhone,
      buyerAddress: buyerInfo.buyerAddress,
      orders: []
    } );
      newUser.save();

};

const saveNewSeller = ( sellerInfo ) => {
  console.log(sellerInfo);
  const newSeller = new Sellers( {
      sellerName: sellerInfo.sellerName,
      sellerEmail: sellerInfo.sellerEmail,
      sellerAddress: sellerInfo.sellerAddress,
      location: sellerInfo.location,
      sellerPhone: sellerInfo.sellerPhone,
      password: sellerInfo.password,
      createdAt: sellerInfo.createdAt,
      orders: sellerInfo.orders,
      products: sellerInfo.products,
      services: sellerInfo.services,
    } );

      newSeller.save();

};


module.exports = {
  getSellerLogin,
  getServiceCategory,
  getBuyerLogin,
  saveNewBuyer,
  checkForBuyer,
  checkForSeller,
  saveNewSeller
};

//buyer = 'undefined undefined';
//category = 'Plumbing'; //type service
//orders = empty;
//repos =
//seller = 'Joe String'

