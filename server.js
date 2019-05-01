"use strict";
const express = require("express");
const config = require("dotenv/config");
const PORT = process.env.PORT || config.SERVER_PORT;
const HOST = process.env.HOST || config.SERVER_HOST;

const app = express();

//running the server
app.listen(PORT, () => {
  console.log(`Server Running at:${HOST}:${PORT}`);
});
