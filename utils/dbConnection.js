"use strict";
const mongoose = require("mongoose");
require("dotenv/config");
const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

//create connection
const db_connection = mongoose
  .connect(`${DB_URL}${DB_NAME}`, {
    useNewUrlParser: true
  })
  .then(con => {
    console.log("DB connected successfully");
  })
  .catch(err => {
    console.log(`DB connection Error! Details:${err}`);
  });
module.exports = db_connection;
