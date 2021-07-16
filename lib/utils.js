const Validations = {
  /**
  * Validates if string has chinese chars
  *
  * @param {String} str
  * @return {Boolean} true has has chinese chars and false has not
  * @private
  */
  isChinese(str) {
    return /[\u4e00-\u9fa5]+/.test(str);
  }
}

/**
 * Validates if params is a object
 *
 * @param {Object} object
 * @return {Boolean} true is valid object and false for invalid
 * @public
 */
const isValidObject = (object) => {
  return object && (typeof object === 'object') && !(object instanceof Date);
}
 
 /**
  * Validates if string has special chars
  *
  * @param {String} str
  * @return {Boolean} true has special chars and false has not
  * @public
  */
const hasSpecialChars = (str) => {
  for (const key of Object.keys(Validations)) {
    if (Validations[key](str)) return true;
  }
  return false;
}

exports.isValidObject = isValidObject;
exports.hasSpecialChars = hasSpecialChars;
