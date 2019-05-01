"use strict";
const express = require("express");
require("dotenv/config");
const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;

const app = express();

//running the server
app.listen(PORT, () => {
  console.log(`Server Running at:${HOST}:${PORT}`);
});
