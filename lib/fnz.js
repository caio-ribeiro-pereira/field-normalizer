const changeCase = require('change-case');

/**
 * Validates if params is a object
 *
 * @param {Object} object
 * @return {Boolean} true is valid object and false for invalid
 * @private
 */
const isValidObject = (object) => object && (typeof object === 'object') && !Array.isArray(object);

/**
 * Transforms all object fields based on cast string
 *
 * @param {Object} object
 * @param {String} cast
 * @return {Object} object with transformed fields based on cast string function
 * @private
 */
const transform = (object, cast, native = false) => {
  if (isValidObject(object)) {
    const keys = Object.keys(object);
    return keys.reduce((normalized, key) => {
      const transformedKey = native ? key[cast]() : changeCase[cast](key);
      normalized[transformedKey] = object[key];
      return normalized;
    }, {});
  }
  return {};
};

/**
 * Transforms all object fields to lower case.
 *
 * Example: { fullname, phonenumber, contactemail }
 *
 * @param {Object} object
 * @return {Object} object with lower case fields
 * @public
 */
const toLowerCase = (object) => transform(object, 'toLowerCase', true);

/**
 * Transforms all object fields to upper case.
 *
 * Example: { FULLNAME, PHONENUMBER, CONTACTEMAIL }
 *
 * @param {Object} object
 * @return {Object} object with upper case fields
 * @public
 */
const toUpperCase = (object) => transform(object, 'toUpperCase', true);

/**
 * Transforms all object fields to camel case.
 *
 * Example: { fullName, phoneNumber, contactEmail }
 *
 * @param {Object} object
 * @return {Object} object with camel case fields
 * @public
 */
const toCamelCase = (object) => transform(object, 'camelCase');

/**
 * Transforms all object fields to pascal case.
 *
 * Example: { FullName, PhoneNumber, ContactEmail }
 *
 * @param {Object} object
 * @return {Object} object with pascal case fields
 * @public
 */
const toPascalCase = (object) => transform(object, 'pascalCase');

/**
 * Transforms all object fields to constant case.
 *
 * Example: { FULL_NAME, PHONE_NUMBER, CONTACT_EMAIL }
 *
 * @param {Object} object
 * @return {Object} object with constant case fields
 * @public
 */
const toConstantCase = (object) => transform(object, 'constantCase');

/**
 * Transforms all object fields to snake case.
 *
 * Example: { full_name, phone_number, contact_email }
 *
 * @param {Object} object
 * @return {Object} object with snake case fields
 * @public
 */
const toSnakeCase = (object) => transform(object, 'snakeCase');

exports.toLowerCase = toLowerCase;
exports.toUpperCase = toUpperCase;
exports.toCamelCase = toCamelCase;
exports.toPascalCase = toPascalCase;
exports.toConstantCase = toConstantCase;
exports.toSnakeCase = toSnakeCase;
