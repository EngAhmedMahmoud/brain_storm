"use strict";
const User = require("./userModel");

class UserController {
  /**
   * Add new User
   * @param {Object} user
   * @return {Object} success,data,msg
   */
  create(user) {
    const addUser = new User(user);
    return addUser
      .save()
      .then(saved => {
        return {
          success: 1,
          msg: "User saved successfully",
          data: saved
        };
      })
      .catch(err => {
        return {
          success: 0,
          msg: "Error! Details:" + err,
          data: err
        };
      });
  }
}
module.exports = new UserController();
