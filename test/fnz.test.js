/* global describe, test, expect */
const fnz = require('../index');

const camelCaseObj = {
  fullName: 'John Connor',
  contactEmail: 'john.connor@sky.net',
  phoneNumber: '+05533334444',
};

const pascalCaseObj = {
  FullName: 'John Connor',
  ContactEmail: 'john.connor@sky.net',
  PhoneNumber: '+05533334444',
};

const constantCaseObj = {
  FULL_NAME: 'John Connor',
  CONTACT_EMAIL: 'john.connor@sky.net',
  PHONE_NUMBER: '+05533334444',
};

const snakeCaseObj = {
  full_name: 'John Connor',
  contact_email: 'john.connor@sky.net',
  phone_number: '+05533334444',
};

describe('testing invalid behaviors', () => {
  test('returns empty when params is null', () => {
    expect(fnz.toLowerCase(null)).toEqual({});
  });

  test('returns empty when params is undefined', () => {
    expect(fnz.toLowerCase(undefined)).toEqual({});
  });

  test('returns empty when params is string', () => {
    expect(fnz.toLowerCase('string')).toEqual({});
  });

  test('returns empty when params is array', () => {
    expect(fnz.toLowerCase([1, 2, 3])).toEqual({});
  });

  test('returns empty when params is number', () => {
    expect(fnz.toLowerCase(111)).toEqual({});
  });

  test('returns empty when params is boolean', () => {
    expect(fnz.toLowerCase(true)).toEqual({});
  });

  test('returns empty when params is date', () => {
    expect(fnz.toLowerCase(new Date())).toEqual({});
  });
});

describe('testing lower case transformation', () => {
  test('transforms camel case object keys to lower case', () => {
    const expected = ['fullname', 'contactemail', 'phonenumber'];
    expect(Object.keys(fnz.toLowerCase(camelCaseObj))).toEqual(expected);
  });

  test('transforms pascal case object keys to lower case', () => {
    const expected = ['fullname', 'contactemail', 'phonenumber'];
    expect(Object.keys(fnz.toLowerCase(pascalCaseObj))).toEqual(expected);
  });

  test('transforms constant case object keys to lower case', () => {
    const expected = ['full_name', 'contact_email', 'phone_number'];
    expect(Object.keys(fnz.toLowerCase(constantCaseObj))).toEqual(expected);
  });

  test('transforms snake case object keys to lower case', () => {
    const expected = ['full_name', 'contact_email', 'phone_number'];
    expect(Object.keys(fnz.toLowerCase(snakeCaseObj))).toEqual(expected);
  });
});

describe('testing upper case transformation', () => {
  test('transforms camel case object keys to upper case', () => {
    const expected = ['FULLNAME', 'CONTACTEMAIL', 'PHONENUMBER'];
    expect(Object.keys(fnz.toUpperCase(camelCaseObj))).toEqual(expected);
  });

  test('transforms pascal case object keys to upper case', () => {
    const expected = ['FULLNAME', 'CONTACTEMAIL', 'PHONENUMBER'];
    expect(Object.keys(fnz.toUpperCase(pascalCaseObj))).toEqual(expected);
  });

  test('transforms constant case object keys to upper case', () => {
    const expected = ['FULL_NAME', 'CONTACT_EMAIL', 'PHONE_NUMBER'];
    expect(Object.keys(fnz.toUpperCase(constantCaseObj))).toEqual(expected);
  });

  test('transforms snake case object keys to upper case', () => {
    const expected = ['FULL_NAME', 'CONTACT_EMAIL', 'PHONE_NUMBER'];
    expect(Object.keys(fnz.toUpperCase(snakeCaseObj))).toEqual(expected);
  });
});

describe('testing camel case transformation', () => {
  test('transforms camel case object keys to camel case', () => {
    const expected = ['fullName', 'contactEmail', 'phoneNumber'];
    expect(Object.keys(fnz.toCamelCase(camelCaseObj))).toEqual(expected);
  });

  test('transforms pascal case object keys to camel case', () => {
    const expected = ['fullName', 'contactEmail', 'phoneNumber'];
    expect(Object.keys(fnz.toCamelCase(pascalCaseObj))).toEqual(expected);
  });

  test('transforms constant case object keys to camel case', () => {
    const expected = ['fullName', 'contactEmail', 'phoneNumber'];
    expect(Object.keys(fnz.toCamelCase(constantCaseObj))).toEqual(expected);
  });

  test('transforms snake case object keys to camel case', () => {
    const expected = ['fullName', 'contactEmail', 'phoneNumber'];
    expect(Object.keys(fnz.toCamelCase(snakeCaseObj))).toEqual(expected);
  });
});

describe('testing pascal case transformation', () => {
  test('transforms camel case object keys to pascal case', () => {
    const expected = ['FullName', 'ContactEmail', 'PhoneNumber'];
    expect(Object.keys(fnz.toPascalCase(camelCaseObj))).toEqual(expected);
  });

  test('transforms pascal case object keys to pascal case', () => {
    const expected = ['FullName', 'ContactEmail', 'PhoneNumber'];
    expect(Object.keys(fnz.toPascalCase(pascalCaseObj))).toEqual(expected);
  });

  test('transforms constant case object keys to pascal case', () => {
    const expected = ['FullName', 'ContactEmail', 'PhoneNumber'];
    expect(Object.keys(fnz.toPascalCase(constantCaseObj))).toEqual(expected);
  });

  test('transforms snake case object keys to pascal case', () => {
    const expected = ['FullName', 'ContactEmail', 'PhoneNumber'];
    expect(Object.keys(fnz.toPascalCase(snakeCaseObj))).toEqual(expected);
  });
});

describe('testing snake case transformation', () => {
  test('transforms camel case object keys to snake case', () => {
    const expected = ['full_name', 'contact_email', 'phone_number'];
    expect(Object.keys(fnz.toSnakeCase(camelCaseObj))).toEqual(expected);
  });

  test('transforms pascal case object keys to snake case', () => {
    const expected = ['full_name', 'contact_email', 'phone_number'];
    expect(Object.keys(fnz.toSnakeCase(pascalCaseObj))).toEqual(expected);
  });

  test('transforms constant case object keys to snake case', () => {
    const expected = ['full_name', 'contact_email', 'phone_number'];
    expect(Object.keys(fnz.toSnakeCase(constantCaseObj))).toEqual(expected);
  });

  test('transforms snake case object keys to snake case', () => {
    const expected = ['full_name', 'contact_email', 'phone_number'];
    expect(Object.keys(fnz.toSnakeCase(snakeCaseObj))).toEqual(expected);
  });
});

describe('testing constant case transformation', () => {
  test('transforms camel case object keys to constant case', () => {
    const expected = ['FULL_NAME', 'CONTACT_EMAIL', 'PHONE_NUMBER'];
    expect(Object.keys(fnz.toConstantCase(camelCaseObj))).toEqual(expected);
  });

  test('transforms pascal case object keys to constant case', () => {
    const expected = ['FULL_NAME', 'CONTACT_EMAIL', 'PHONE_NUMBER'];
    expect(Object.keys(fnz.toConstantCase(pascalCaseObj))).toEqual(expected);
  });

  test('transforms constant case object keys to constant case', () => {
    const expected = ['FULL_NAME', 'CONTACT_EMAIL', 'PHONE_NUMBER'];
    expect(Object.keys(fnz.toConstantCase(constantCaseObj))).toEqual(expected);
  });

  test('transforms snake case object keys to constant case', () => {
    const expected = ['FULL_NAME', 'CONTACT_EMAIL', 'PHONE_NUMBER'];
    expect(Object.keys(fnz.toConstantCase(snakeCaseObj))).toEqual(expected);
  });
});

describe('testing header case transformation', () => {
  test('transforms camel case object keys to header case', () => {
    const expected = ['Full-Name', 'Contact-Email', 'Phone-Number'];
    expect(Object.keys(fnz.toHeaderCase(camelCaseObj))).toEqual(expected);
  });

  test('transforms pascal case object keys to header case', () => {
    const expected = ['Full-Name', 'Contact-Email', 'Phone-Number'];
    expect(Object.keys(fnz.toHeaderCase(pascalCaseObj))).toEqual(expected);
  });

  test('transforms constant case object keys to header case', () => {
    const expected = ['Full-Name', 'Contact-Email', 'Phone-Number'];
    expect(Object.keys(fnz.toHeaderCase(constantCaseObj))).toEqual(expected);
  });

  test('transforms snake case object keys to header case', () => {
    const expected = ['Full-Name', 'Contact-Email', 'Phone-Number'];
    expect(Object.keys(fnz.toHeaderCase(snakeCaseObj))).toEqual(expected);
  });
});

describe('testing param case transformation', () => {
  test('transforms camel case object keys to param case', () => {
    const expected = ['full-name', 'contact-email', 'phone-number'];
    expect(Object.keys(fnz.toParamCase(camelCaseObj))).toEqual(expected);
  });

  test('transforms pascal case object keys to param case', () => {
    const expected = ['full-name', 'contact-email', 'phone-number'];
    expect(Object.keys(fnz.toParamCase(pascalCaseObj))).toEqual(expected);
  });

  test('transforms constant case object keys to param case', () => {
    const expected = ['full-name', 'contact-email', 'phone-number'];
    expect(Object.keys(fnz.toParamCase(constantCaseObj))).toEqual(expected);
  });

  test('transforms snake case object keys to param case', () => {
    const expected = ['full-name', 'contact-email', 'phone-number'];
    expect(Object.keys(fnz.toParamCase(snakeCaseObj))).toEqual(expected);
  });
});
