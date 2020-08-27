/* global test, expect */
const fnz = require('../index');

const mainObject = {
  fullName: 'John Connor',
  contactEmail: 'john.connor@sky.net',
  phoneNumber: '+05533334444',
};

test('transforms object fields to lower case', () => {
  const result = fnz.toLowerCase(mainObject);
  expect(result).toEqual({
    fullname: 'John Connor',
    contactemail: 'john.connor@sky.net',
    phonenumber: '+05533334444',
  });
});

test('transforms object fields to upper case', () => {
  const result = fnz.toUpperCase(mainObject);
  expect(result).toEqual({
    FULLNAME: 'John Connor',
    CONTACTEMAIL: 'john.connor@sky.net',
    PHONENUMBER: '+05533334444',
  });
});

test('transforms object fields to camel case', () => {
  const result = fnz.toCamelCase(mainObject);
  expect(result).toEqual({
    fullName: 'John Connor',
    contactEmail: 'john.connor@sky.net',
    phoneNumber: '+05533334444',
  });
});

test('transforms object fields to pascal case', () => {
  const result = fnz.toPascalCase(mainObject);
  expect(result).toEqual({
    FullName: 'John Connor',
    ContactEmail: 'john.connor@sky.net',
    PhoneNumber: '+05533334444',
  });
});

test('transforms object fields to snake case', () => {
  const result = fnz.toSnakeCase(mainObject);
  expect(result).toEqual({
    full_name: 'John Connor',
    contact_email: 'john.connor@sky.net',
    phone_number: '+05533334444',
  });
});

test('transforms object fields to constant case', () => {
  const result = fnz.toConstantCase(mainObject);
  expect(result).toEqual({
    FULL_NAME: 'John Connor',
    CONTACT_EMAIL: 'john.connor@sky.net',
    PHONE_NUMBER: '+05533334444',
  });
});
