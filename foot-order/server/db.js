const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin61:1234@cluster62.bo9qmqx.mongodb.net/foot-order?retryWrites=true&w=majority"
);
//connection'ın açık kapalı olmasına göre iki farklı opsiyon verdiğimiz veritabanını dinleyen metotarı yazalım.

var db = mongoose.connection;
db.on("connected", () => {
  console.log("mongo db bağlantısı başarıyla sağlandı.");
});

db.on("error", () => {
  console.log("mongo db bağlantısı arızalı.");
});

module.exports = mongoose;
