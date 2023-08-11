const { MongoClient } = require('mongodb');

var mongoURL =
  'mongodb+srv://haddis:Haddis%4011to@cluster0.0nrln3h.mongodb.net/food-delivery';

let DBConnection;

module.exports = {
  connectedToDB: (cb) => {
    MongoClient.connect(mongoURL)
      .then((client) => {
        DBConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDB: () => DBConnection,
};
