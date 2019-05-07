"use strict";
const express = require("express");
const userCtrl = require("./userCtrl");
const router = express.Router();

router.get("/register", (req, res, next) => {
  res.render("register");
});
router.post("/register", async (req, res, next) => {
  const addUser = await userCtrl.create(req.body);
  res.send(addUser);
});

module.exports = router;
