// expresspaketini tanımladık.
const express = require("express");

// cors paketini tanımladık.
const cors = require("cors");

// app middleware i vasıtasyıla express kütüphaensine erişim sağladık
const app = express();
//db için hazırlamış olduğumuz js dosyasını çağıralım.
const db = require("./db");
const burgerModel = require("./models/BurgerModel");

//middlewareimiz ile cors kütüphanesini kullanmayı ve json req ve res'lerinde hata almanın önüne geçtk.
app.use(express.json());
app.use(cors());

//getfoods servisi
app.get("/getfoods", async (req, res) => {
  try {
    const foods = await burgerModel.find({});
    res.send(foods);
  } catch (err) {
    console.log(err);
  }
});
//serverımızı inşa ederken portu belirledik.
var port = 4000;
app.listen(4000, () => {
  console.log(`Food Order Serverı${port} portunda başarıyla  ayağa kalktı🔥🔥`);
});
