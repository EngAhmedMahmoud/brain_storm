"use strict";
const express = require("express");
require("dotenv/config");
const db_connection = require("./utils/dbConnection");
const bodyParser = require("body-parser");
const userRoutes = require("./src/user/userRoutes");
const path = require("path");
const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;
//db connection
db_connection.db_connection;

//create express app
const app = express();

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//setup template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//user routes
app.use("/users", userRoutes);
app.get("", (req, res, next) => {
  res.render("index");
});
//running the server
app.listen(PORT, () => {
  console.log(`Server Running at:${HOST}:${PORT}`);
});
