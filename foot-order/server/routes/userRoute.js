const express = require("express");
const UserModel = require("../models/UserModel");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, mail, password } = req.body;

  const newUser = new UserModel({
    name: name,
    mail: mail,
    password: password,
  });
  try {
    await newUser.save();
    res.send("user register is successfull");
  } catch (error) {
    res.send("user register is failed");
  }
});
module.exports = router;
