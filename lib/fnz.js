const changeCase = require('change-case');
const Enums = require('./enums');
const Utils = require('./utils');

const { FUNCTIONS, NATIVE_FUNCTIONS } = Enums;
const { isValidObject, hasSpecialChars } = Utils;

/**
 * Factory method which transforms all object fields based on functionName string
 *
 * @param {Object} object
 * @param {String} functionName
 * @return {Object} object with transformed fields based on cast string function
 * @public
 */
const transform = (object, functionName) => {
  if (!FUNCTIONS[functionName]) {
    throw new Error(`"${functionName}" is an invalid transformation`);
  }
  if (!isValidObject(object) || Array.isArray(object)) return object;

  const keys = Object.keys(object);
  return keys.reduce((normalized, key) => {
    const native = NATIVE_FUNCTIONS.includes(functionName);
    let transformedKey;
    if (native) {
      transformedKey = key[functionName]();
    } else if (!hasSpecialChars(key)) {
      transformedKey = changeCase[functionName](key);
    } else {
      transformedKey = key;
    }
    if (Array.isArray(object[key])) {
      normalized[transformedKey] = object[key].map((i) => transform(i, functionName));
    } else {
      const isValidKey = isValidObject(object[key]);
      normalized[transformedKey] = isValidKey ? transform(object[key], functionName) : object[key];
    }
    return normalized;
  }, {});
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
const toLowerCase = (object) => transform(object, FUNCTIONS.toLowerCase);

/**
 * Transforms all object fields to upper case.
 *
 * Example: { FULLNAME, PHONENUMBER, CONTACTEMAIL }
 *
 * @param {Object} object
 * @return {Object} object with upper case fields
 * @public
 */
const toUpperCase = (object) => transform(object, FUNCTIONS.toUpperCase);

/**
 * Transforms all object fields to camel case.
 *
 * Example: { fullName, phoneNumber, contactEmail }
 *
 * @param {Object} object
 * @return {Object} object with camel case fields
 * @public
 */
const toCamelCase = (object) => transform(object, FUNCTIONS.camelCase);

/**
 * Transforms all object fields to pascal case.
 *
 * Example: { FullName, PhoneNumber, ContactEmail }
 *
 * @param {Object} object
 * @return {Object} object with pascal case fields
 * @public
 */
const toPascalCase = (object) => transform(object, FUNCTIONS.pascalCase);

/**
 * Transforms all object fields to constant case.
 *
 * Example: { FULL_NAME, PHONE_NUMBER, CONTACT_EMAIL }
 *
 * @param {Object} object
 * @return {Object} object with constant case fields
 * @public
 */
const toConstantCase = (object) => transform(object, FUNCTIONS.constantCase);

/**
 * Transforms all object fields to snake case.
 *
 * Example: { full_name, phone_number, contact_email }
 *
 * @param {Object} object
 * @return {Object} object with snake case fields
 * @public
 */
const toSnakeCase = (object) => transform(object, FUNCTIONS.snakeCase);

/**
 * Transforms all object fields to header case.
 *
 * Example: { 'Full-Name', 'Phone-Number', 'Contact-Email' }
 *
 * @param {Object} object
 * @return {Object} object with header case fields
 * @public
 */
const toHeaderCase = (object) => transform(object, FUNCTIONS.headerCase);

/**
 * Transforms all object fields to param case.
 *
 * Example: { 'full-name', 'phone-number', 'contact-email' }
 *
 * @param {Object} object
 * @return {Object} object with param case fields
 * @public
 */
const toParamCase = (object) => transform(object, FUNCTIONS.paramCase);

exports.FUNCTIONS = FUNCTIONS;
exports.transform = transform;
exports.toLowerCase = toLowerCase;
exports.toUpperCase = toUpperCase;
exports.toCamelCase = toCamelCase;
exports.toPascalCase = toPascalCase;
exports.toConstantCase = toConstantCase;
exports.toSnakeCase = toSnakeCase;
exports.toHeaderCase = toHeaderCase;
exports.toParamCase = toParamCase;
