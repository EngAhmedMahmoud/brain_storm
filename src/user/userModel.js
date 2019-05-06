"use strict";
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const User = new schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  userName: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("User", User, "users");
