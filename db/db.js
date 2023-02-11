const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL;

const databaseConnection = function () {
   mongoose
      .connect(MONGODB_URL)
      .then((res) => {
         console.log('database connected');
      })
      .catch((err) => {
         console.log(err);
      });
};

module.exports = databaseConnection;
