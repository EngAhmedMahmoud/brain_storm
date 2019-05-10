"use strict";
const express = require("express");
const userCtrl = require("./userCtrl");
const router = express.Router();
const userValidator = require("./userValidator");

router.get("/register", (req, res, next) => {
  res.render("register");
});
router.post("/register", async (req, res, next) => {
  const checkValidation = userValidator.validateUser(req.body);
  if (checkValidation.length === 0) {
    const addUser = await userCtrl.create(req.body);
    res.send(addUser);
  } else {
    res.send(checkValidation);
  }
});

module.exports = router;
