# Field Normalizer

A tiny lib for object field's normalization [![Build Status](https://travis-ci.org/caio-ribeiro-pereira/field-normalizer.svg?branch=master)](https://travis-ci.org/caio-ribeiro-pereira/field-normalizer)

## About

This is a tiny lib **(~6kb size)** compatible with Node.js v12+, useful to format the name of all keys in a object, you can transform all keys to lowerCase, upperCase, camelCase, pascalCase, constantCase and snakeCase.


### How to install

```
npm install --save field-normalizer
```

### How to use

``` javascript
const FNZ = require('field-normalizer');

const exampleObj = {
  fullName: 'John Connor',
  contactEmail: 'john.connor@sky.net',
  phoneNumber: '+05533334444',
};

// Transforms all object fields to lower case.
FNZ.toLowerCase(exampleObj);
// { fullname, contactemail, phonenumber }

// Transforms all object fields to upper case.
FNZ.toUpperCase(exampleObj);
// { FULLNAME, CONTACTEMAIL, PHONENUMBER }

// Transforms all object fields to camel case.
FNZ.toCamelCase(exampleObj);
// { fullName, contactEmail, phoneNumber }

// Transforms all object fields to pascal case.
FNZ.toPascalCase(exampleObj);
// { FullName, ContactEmail, PhoneNumber }

// Transforms all object fields to constant case.
FNZ.toConstantCase(exampleObj);
// { FULL_NAME, CONTACT_EMAIL, PHONE_NUMBER }

// Transforms all object fields to snake case.
FNZ.toSnakeCase(exampleObj);
// { full_name, contact_email, phone_number }
```

## Author

Caio Ribeiro Pereira <caio.ribeiro.pereira@gmail.com>  
Twitter: <https://twitter.com/crp_underground>  
About me: <https://crpwebdev.github.io>
