"use strict";
const LANG = "ar";
const getLang = require(`./../langs/${LANG}.json`);

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
  isEmail(inputVal, inputName) {
    const emailPattern = /^([a-zA-Z0-9_\.\-]{1,30})\@([a-zA-Z0-9_\.\-]{1,30}\.)([a-zA-Z0-9]{2,4})$/;
    let check = emailPattern.test(inputVal);
    if (!check) {
      return {
        status: false,
        msg: this.setErrorMsg(inputName, "isEmail"),
        rule: "isEmail"
      };
    } else {
      return { status: true };
    }
  }
  Required(inputVal, inputName) {
    if (inputVal.trim() === "") {
      return {
        status: false,
        msg: this.setErrorMsg(inputName, "Required"),
        rule: "Required"
      };
    } else {
      return {
        status: true
      };
    }
  }
  setErrorMsg(input, rule) {
    return `${getLang.inputs[input]}  ${getLang.errorMsg[rule]}`;
  }
  getErrorMsg(rules) {
    //return required msg first
    let required = rules
      .filter(rule => {
        return rule && rule.status === false && rule.rule === "Required";
      })
      .map(errors => {
        return errors.msg;
      });
    if (required && required.length === 0) {
      let errors = rules
        .filter(rule => {
          return rule && rule.status === false && rule.rule !== "Required";
        })
        .map(errors => {
          return errors.msg;
        });
      return errors;
    } else {
      return required;
    }
  }
}
//validator instance
const validator = new Validator();
module.exports = validator;
