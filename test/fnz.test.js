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

const { FUNCTIONS } = fnz;

describe('testing factory transform()', () => {
  describe('valid behaviors', () => {
    test('returns valid object for all functions', () => {
      Object.keys(FUNCTIONS).forEach((functionName) => {
        expect(fnz.transform(camelCaseObj, functionName)).not.toBe({});
      });
    });
  });

  describe('invalid behaviors', () => {
    test('returns {} when params is valid, but function string is invalid', () => {
      expect(fnz.transform(camelCaseObj, 'INVALID')).toEqual({});
    });

    test('returns {} when params is null', () => {
      expect(fnz.transform(null, FUNCTIONS.camelCase)).toEqual({});
    });

    test('returns {} when params is undefined', () => {
      expect(fnz.transform(undefined, FUNCTIONS.camelCase)).toEqual({});
    });

    test('returns {} when params is string', () => {
      expect(fnz.transform('string', FUNCTIONS.camelCase)).toEqual({});
    });

    test('returns {} when params is array', () => {
      expect(fnz.transform([1, 2, 3], FUNCTIONS.camelCase)).toEqual({});
    });

    test('returns {} when params is number', () => {
      expect(fnz.transform(111, FUNCTIONS.camelCase)).toEqual({});
    });

    test('returns {} when params is boolean', () => {
      expect(fnz.transform(true, FUNCTIONS.camelCase)).toEqual({});
    });

    test('returns {} when params is date', () => {
      expect(fnz.transform(new Date(), FUNCTIONS.camelCase)).toEqual({});
    });
  });
});

describe('testing function toLowerCase()', () => {
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

describe('testing function toUpperCase()', () => {
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

describe('testing function toCamelCase()', () => {
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

describe('testing function toPascalCase()', () => {
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

describe('testing function toSnakeCase()', () => {
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

describe('testing function toConstantCase()', () => {
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

describe('testing function toHeaderCase()', () => {
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

describe('testing function toParamCase()', () => {
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
