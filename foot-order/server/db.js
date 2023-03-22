const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

//connection'ın açık kapalı olmasına göre iki farklı opsiyon verdiğimiz veritabanını dinleyen metotarı yazalım.

var db = mongoose.connection;
db.on("connected", () => {
  console.log("mongo db bağlantısı başarıyla sağlandı.");
});

db.on("error", () => {
  console.log("mongo db bağlantısı arızalı.");
});

module.exports = mongoose;
