const mongooseDB = require('mongoose');

mongooseDB.connect('mongodb://test:test123@localhost:27017/search').then(
  () => { console.log("Database Successfully Connected"); },
  (err) => { console.log(`Connection failed with ${err.message}`) }
);

module.exports = mongooseDB;
