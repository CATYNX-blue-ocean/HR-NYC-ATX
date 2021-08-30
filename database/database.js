const mongoose = require('mongoose');
const dbInfo = require('../config.js');

mongoose.connect(`mongodb://${dbInfo.dbInfo}`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error to Mongo:'));
db.once('open', function() {
  console.log('Connected to MongoDB!');
});

let mongoSchema = mongoose.Schema({

  // TODO: our schema here
});





module.exports = {

};