const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/fetcher');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error to Mongo:'));
db.once('open', function() {
  console.log('Connected to MongoDB!');
});

module.exports = {

}