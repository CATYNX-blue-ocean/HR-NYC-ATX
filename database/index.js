const mongoose = require('mongoose');
const dbInfo = require('../config');
mongoose.connect(`mongodb://${dbInfo.dbInfo}`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error to Mongo:'));
db.once('open', function () {
  console.log('Connected to MongoDB!');
});

const productListing = mongoose.Schema({
  id: Number, //OR Obj_id
  productName: String,
  productCategory: String,
  productDescription: String,
  inventory: String, // TO BE DECIDED: '' or {}
  productImage: [String],
  trending: Boolean,
  ratings: [Number],
});

const serviceListing = mongoose.Schema({
  id: Number, //OR Obj_id
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
  products: [productListing],
  services: [serviceListing],
});

const buyerSchema = mongoose.Schema({
  //buyer_id: Number, //OPTIONAL, could use unique names
  buyerName: String,
  password: String, // hashed
  buyerEmail: String,
  buyerPhone: String,
  buyerAddress: String,
  orders: [Number],
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
const Services = mongoose.model('Services', serviceListing);

const getSellerLogin = async (email) => {
  return await Sellers.findOne({ sellerEmail: email });
};

const getAllCategories = () => {
  return Categories.find({});
};

module.exports = db;

const getProductList = async (cb) => {
  await Sellers
    .find({})
    .populate({ path: 'products' })
    //.lean()
    .exec(function (err, result) {
      if (err) {
        return err;
      }
      result = result.map((r) => r.toObject());
      cb(null, result);
    });
};


const getServiceList = async (cb) => {
  await Sellers
    .find({})
    .populate({ path: 'services' })
    //.lean()
    .exec(function (err, result) {
      if (err) {
        return err;
      }
      cb(null, result);
    });
};

const getServiceCategory = (category) => {
  //get all sellers that have a service in that category
  return Sellers.find({ 'services.serviceCategory': category });
};

const getBuyerLogin = async (email) => {
  console.log('Database Log ' + email);
  return await Buyers.find({buyerEmail: email});
};

const checkForBuyer = (buyerEmail) => {
  return Buyers.exists({ buyerEmail });
};

const checkForSeller = (sellerEmail) => {
  return Sellers.exists({ sellerEmail });
};

const saveNewBuyer = (buyerInfo) => {
  const newUser = new Buyers({
    buyerName: buyerInfo.buyerName,
    password: buyerInfo.password,
    buyerEmail: buyerInfo.buyerEmail,
    buyerPhone: buyerInfo.buyerPhone,
    buyerAddress: buyerInfo.buyerAddress,
    orders: [],
  });
  newUser.save();
};

const saveNewSeller = (sellerInfo) => {
  console.log(sellerInfo);
  const newOrder = new Sellers({
    sellerName: sellerInfo.sellerName,
    sellerEmail: sellerInfo.sellerEmail,
    sellerAddress: sellerInfo.sellerAddress,
    location: sellerInfo.location,
    sellerPhone: sellerInfo.sellerPhone,
    password: sellerInfo.password,
    createdAt: sellerInfo.createdAt,
    orders: sellerInfo.orders,
    products: [],
    services: []
  });

  newSeller.save();
};

const searchForProducts = (key, CB) => {
  //====V1======FIND MATCHING SELLERS=======
  // Sellers.find(
  //   {'products.productName': { $regex : '^' + key, $options: 'i'}}, //{'$regex': keyword, "$options": "i"}
  //   (err, data) => {
  //     if (err) {
  //       console.log('ERR IN DB ', err)
  //       CB(err);
  //     }
  //     console.log('SUCCESS IN DB ', data);
  //     CB(null, data);
  //   }
  // );
  //====V2======FIND MATCHING SELLERS WITH ALL PRODUCTS====
  Sellers.find({ 'products.productName': { $regex: key, $options: 'i' } })
    .populate({ path: 'products' })
    .exec((err, data) => {
      if (err) {
        console.log('ERR IN DB ', err);
        CB(err);
      }
      console.log('SUCCESS IN DB ', data);
      CB(null, data);
    });
};

const searchForServices = (key, CB) => {
  Sellers.find({ 'services.serviceCategory': { $regex: key, $options: 'i' } })
    .populate({ path: 'services' })
    .exec((err, data) => {
      if (err) {
        console.log('ERR IN DB ', err);
        CB(err);
      }
      console.log('SUCCESS IN DB ', data);
      CB(null, data);
    });
};

const catFind = async (name) => {
  return await Categories.find({});
};

const saveNewOrder = (orderInfo) => {
  const newOrder = new Orders({
    orderID: orderInfo.orderId,
    sellerName: orderInfo.sellerName,
    buyerName: orderInfo.buyerName,
    productID: orderInfo.productID,
    shippingAddress: orderInfo.shippingAddress,
    paymentInfo: orderInfo.paymentInfo,
  });
  return newOrder.save();
};

module.exports = {
  getSellerLogin,
  getServiceCategory,
  getAllCategories,
  getBuyerLogin,
  saveNewBuyer,
  checkForBuyer,
  checkForSeller,
  saveNewSeller,
  searchForProducts,
  searchForServices,
  getServiceList,
  getProductList,
  catFind,
  saveNewOrder,
};

//buyer = 'undefined undefined';
//category = 'Plumbing'; //type service
//orders = empty;
//repos =
//seller = 'Joe String'
