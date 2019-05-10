"use strict";
const validator = require("./../../utils/validation");
const LANG = "en";
const getLang = require(`./../../langs/${LANG}.json`);
class UserValidator {
  validateUser(user) {
    const errors = [];
    let { email, userName, password } = user;
    if (email && !validator.isEmail(email)) {
      errors.push(getLang.errorMsg.email.notValid);
    }
    if (!validator.isEmpty(email)) {
      errors.push(getLang.errorMsg.email.empty);
    }
    return errors;
  }
}
module.exports = new UserValidator();
