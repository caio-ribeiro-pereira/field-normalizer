/* global describe, test, expect */
const fnz = require('../index');

const camelCaseObj = {
  fullName: 'John Connor',
  contact: {
    contactEmail: 'john.connor@sky.net',
    phoneNumber: '+05533334444',
  },
  skills: [
    { name: 'Javascript', proficiencyLevel: 3 },
    { name: 'Typescript', proficiencyLevel: 1 },
  ],
};

const pascalCaseObj = {
  FullName: 'John Connor',
  Contact: {
    ContactEmail: 'john.connor@sky.net',
    PhoneNumber: '+05533334444',
  },
  Skills: [
    { Name: 'Javascript', ProficiencyLevel: 3 },
    { Name: 'Typescript', ProficiencyLevel: 1 },
  ],
};

const constantCaseObj = {
  FULL_NAME: 'John Connor',
  CONTACT: {
    CONTACT_EMAIL: 'john.connor@sky.net',
    PHONE_NUMBER: '+05533334444',
  },
  SKILLS: [
    { NAME: 'Javascript', PROFICIENCY_LEVEL: 3 },
    { NAME: 'Typescript', PROFICIENCY_LEVEL: 1 },
  ],
};

const snakeCaseObj = {
  full_name: 'John Connor',
  contact: {
    contact_email: 'john.connor@sky.net',
    phone_number: '+05533334444',
  },
  skills: [
    { name: 'Javascript', proficiency_level: 3 },
    { name: 'Typescript', proficiency_level: 1 },
  ],
};

const { FUNCTIONS } = fnz;
const CASES = [
  { name: 'camelCase', function: fnz.toCamelCase, result: camelCaseObj },
  { name: 'PascalCase', function: fnz.toPascalCase, result: pascalCaseObj },
  { name: 'CONSTANT_CASE', function: fnz.toConstantCase, result: constantCaseObj },
  { name: 'snake_case', function: fnz.toSnakeCase, result: snakeCaseObj },
];

describe('testing factory transform()', () => {
  describe('valid behaviors', () => {
    test('returns valid object for all functions', () => {
      Object.keys(FUNCTIONS).forEach((functionName) => {
        expect(fnz.transform(camelCaseObj, functionName)).not.toBe({});
      });
    });
  });

  CASES.forEach((fromCase) => {
    describe(`.${fromCase.function.name}`, () => {
      CASES.filter((c) => c.name !== fromCase.name).forEach((toCase) => {
        test(`transform from ${fromCase.name} to ${toCase.name}`, () => {
          expect(toCase.function(fromCase.result)).toEqual(toCase.result);
        });
      });
    });
  });

  describe('invalid behaviors', () => {
    test('throws error when params is valid, but function string is invalid', () => {
      expect(() => fnz.transform(camelCaseObj, 'INVALID')).toThrowError('Invalid Object');
    });

    test('throws error when params is null', () => {
      expect(() => fnz.transform(null, FUNCTIONS.camelCase)).toThrowError('Invalid Object');
    });

    test('throws error when params is undefined', () => {
      expect(() => fnz.transform(undefined, FUNCTIONS.camelCase)).toThrowError('Invalid Object');
    });

    test('throws error when params is string', () => {
      expect(() => fnz.transform('string', FUNCTIONS.camelCase)).toThrowError('Invalid Object');
    });

    test('throws error when params is array', () => {
      expect(() => fnz.transform([1, 2, 3], FUNCTIONS.camelCase)).toThrowError('Invalid Object');
    });

    test('throws error when params is number', () => {
      expect(() => fnz.transform(111, FUNCTIONS.camelCase)).toThrowError('Invalid Object');
    });

    test('throws error when params is boolean', () => {
      expect(() => fnz.transform(true, FUNCTIONS.camelCase)).toThrowError('Invalid Object');
    });

    test('throws error when params is date', () => {
      expect(() => fnz.transform(new Date(), FUNCTIONS.camelCase)).toThrowError('Invalid Object');
    });
  });
});
