## 0.0.9
+ Improvements: added hasSpecialChars factory function to validate and ignore special chars from others languages. [yklydxtt](https://github.com/caio-ribeiro-pereira/field-normalizer/pull/14)
+ Improvements: added isChinese function for hasSpecialChars validation
+ Improvements: update change-case version

## 0.0.8
+ Improvements: throw error when is an invalid transformation [kleber-gueriero](https://github.com/caio-ribeiro-pereira/field-normalizer/pull/7)
+ Improvements: test improvements and added separate factories for clean tests

## 0.0.7
+ Improvements: fix deep keys with arrays values [kleber-gueriero](https://github.com/caio-ribeiro-pereira/field-normalizer/pull/5)

## 0.0.6
+ Improvements: fix deep keys transformation [xingyeqishi](https://github.com/caio-ribeiro-pereira/field-normalizer/pull/3)

## 0.0.5
+ Feature: export transform factory function
+ Feature: export constant of allowed function
+ Feature: added isValidFunction() to avoid invalid params in transform() factory
+ Improvements: renamed isObject() to isValidObject()
+ Improvements: changed external transform() native params to internal NATIVE_FUNCTIONS
+ Improvements: added nodejs v11 support

## 0.0.4
+ Feature: added function and tests for toParamCase()
+ Feature: added function and tests for toHeaderCase()

## 0.0.3
+ Improvements: update documentation
+ Feature: added isObject() to avoid invalid params
+ Improvements: added nodejs v13 support
+ Improvements: added codacy support for code quality
+ Improvements: added coveralls for test coverage

## 0.0.2
+ Improvements: update readme and package description
+ Feature: added private function transforms()

## 0.0.1
+ Feature: added function and tests for toLowerCase()
+ Feature: added function and tests for toUpperCase()
+ Feature: added function and tests for toCamelCase()
+ Feature: added function and tests for toPascalCase()
+ Feature: added function and tests for toConstantCase()
+ Feature: added function and tests for toSnakeCase()
