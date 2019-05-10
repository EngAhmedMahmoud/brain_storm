"use strict";
/**
 * Validation class
 * @author Ahmed Mahmoud
 * @copyright EngAhmedMahmoud
 */
class Validator {
  /**
   * isEmail
   * @param {String} email
   * @returns {Boolean} true=>valid false=>notValid
   */
  isEmail(email) {
    const emailPattern = /^([a-zA-Z0-9_\.\-]{1,30})\@([a-zA-Z0-9_\.\-]{1,30}\.)([a-zA-Z0-9]{2,4})$/;
    return emailPattern.test(email);
  }
  isEmpty(input) {
    if (input.trim() === "") {
      return false;
    } else {
      return true;
    }
  }
}
//validator instance
const validator = new Validator();
module.exports = validator;
