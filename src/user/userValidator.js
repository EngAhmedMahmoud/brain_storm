"use strict";
const validator = require("./../../utils/validation");
class UserValidator {
  validateUser(user) {
    let { email, userName, password, cpassword } = user;
    //set validation rules
    const errorMsg = validator.getErrorMsg([
      validator.isEmail(email, "email"),
      validator.Required(email, "email"),
      validator.Required(userName, "userName"),
      validator.Required(password, "password"),
      validator.Required(cpassword, "confirmPassword")
    ]);
    if (errorMsg.length !== 0) {
      return errorMsg;
    } else {
      //validation done successfully
    }
  }
}
module.exports = new UserValidator();
