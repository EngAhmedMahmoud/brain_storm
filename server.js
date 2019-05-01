"use strict";
const express = require("express");
require("dotenv/config");
const db_connection = require("./utils/dbConnection");
const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;

//db connection
db_connection.db_connection;
//create express app
const app = express();

//running the server
app.listen(PORT, () => {
  console.log(`Server Running at:${HOST}:${PORT}`);
});
