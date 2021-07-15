/* global describe, test, expect */
const fnz = require('../index');

const {
  camelCaseObj,
  pascalCaseObj,
  constantCaseObj,
  snakeCaseObj,
  lowerCaseObj,
  upperCaseObj,
  paramCaseObj,
  headerCaseObj,
} = require('./factories');

const { FUNCTIONS } = fnz;
const defaultInputTest = camelCaseObj;
const COMPLEX_CASES = [
  { name: 'camelCase', function: fnz.toCamelCase, result: camelCaseObj },
  { name: 'PascalCase', function: fnz.toPascalCase, result: pascalCaseObj },
  { name: 'CONSTANT_CASE', function: fnz.toConstantCase, result: constantCaseObj },
  { name: 'snake_case', function: fnz.toSnakeCase, result: snakeCaseObj },
  { name: 'param-case', function: fnz.toParamCase, result: paramCaseObj },
  { name: 'Header-Case', function: fnz.toHeaderCase, result: headerCaseObj },
];

const SIMPLE_CASES = [
  { name: 'lowercase', function: fnz.toLowerCase, result: lowerCaseObj },
  { name: 'UPPERCASE', function: fnz.toUpperCase, result: upperCaseObj },
];

describe('testing factory transform()', () => {
  describe('valid behaviors', () => {
    test('returns valid object for all functions', () => {
      Object.keys(FUNCTIONS).forEach((functionName) => {
        expect(fnz.transform(defaultInputTest, functionName)).not.toBe({});
      });
    });

    SIMPLE_CASES.forEach((fromCase) => {
      describe(`.${fromCase.function.name}`, () => {
        SIMPLE_CASES.filter((c) => c.name !== fromCase.name).forEach((toCase) => {
          test(`transform from ${fromCase.name} to ${toCase.name}`, () => {
            expect(toCase.function(fromCase.result)).toEqual(toCase.result);
          });
        });
      });
    });

    COMPLEX_CASES.forEach((fromCase) => {
      describe(`.${fromCase.function.name}`, () => {
        COMPLEX_CASES.filter((c) => c.name !== fromCase.name).forEach((toCase) => {
          test(`transform from ${fromCase.name} to ${toCase.name}`, () => {
            expect(toCase.function(fromCase.result)).toEqual(toCase.result);
          });
        });
      });
    });
  });

  describe('invalid behaviors', () => {
    test('throws error when params is valid, but function name is an invalid transformation', () => {
      expect(() => fnz.transform(defaultInputTest, 'INVALID'))
        .toThrowError('"INVALID" is an invalid transformation');
    });

    test('just returns original param when params is null', () => {
      expect(fnz.transform(null, FUNCTIONS.camelCase)).toEqual(null);
    });

    test('just returns original param when params is undefined', () => {
      expect(fnz.transform(undefined, FUNCTIONS.camelCase)).toEqual(undefined);
    });

    test('just returns original when params is string', () => {
      expect(fnz.transform('string', FUNCTIONS.camelCase)).toEqual('string');
    });

    test('just returns original when params is array', () => {
      expect(fnz.transform([1, 2, 3], FUNCTIONS.camelCase)).toEqual([1, 2, 3]);
    });

    test('just returns original when params is number', () => {
      expect(fnz.transform(111, FUNCTIONS.camelCase)).toEqual(111);
    });

    test('just returns original when params is boolean', () => {
      expect(fnz.transform(true, FUNCTIONS.camelCase)).toEqual(true);
    });

    test('just returns original when params is date', () => {
      const date = new Date();
      expect(fnz.transform(date, FUNCTIONS.camelCase)).toEqual(date);
    });

    test('just returns original when params is chinese key', () => {
      expect(fnz.transform({ 中文chinese: 'aaa' }, FUNCTIONS.camelCase)).toEqual({ 中文chinese: 'aaa' });
    });
  });
});
