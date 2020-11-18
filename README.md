# Field Normalizer

[![Donate via Paypal](https://img.shields.io/badge/donate-paypal-blue)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=L8MUNAKECUULY&source=url) [![Build Status](https://travis-ci.org/caio-ribeiro-pereira/field-normalizer.svg?branch=master)](https://travis-ci.org/caio-ribeiro-pereira/field-normalizer) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/83a64eb80be7418bb5301a2a9baaf1f6)](https://www.codacy.com/manual/caio-ribeiro-pereira/field-normalizer?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=caio-ribeiro-pereira/field-normalizer&amp;utm_campaign=Badge_Grade) [![Coverage Status](https://coveralls.io/repos/github/caio-ribeiro-pereira/field-normalizer/badge.svg?branch=master)](https://coveralls.io/github/caio-ribeiro-pereira/field-normalizer?branch=master) ![npm](https://img.shields.io/npm/dt/field-normalizer) ![GitHub](https://img.shields.io/github/license/caio-ribeiro-pereira/field-normalizer) ![npm](https://img.shields.io/npm/v/field-normalizer) ![GitHub stars](https://img.shields.io/github/stars/caio-ribeiro-pereira/field-normalizer) ![GitHub forks](https://img.shields.io/github/forks/caio-ribeiro-pereira/field-normalizer)

A tiny lib for object field's normalization.

## About

This is a tiny lib **(~14kb size unpacked)** compatible with **Node.js v11+**, useful to format the name of all keys in a object.  
For example, imagine you have a frontend in JavaScript which uses the **camelCase** `({ fullName, contactInfo })` pattern for object's naming convention and you have a ruby on rails's backend api which uses the **snakeCase** convention ({ full_name, contact_info }), sometimes the data flow can be a messy if you don't keep these objects normalized between these frontend and backend, and that's why this tiny lib was born.


### How to install

```
npm install --save field-normalizer
```

### How to use  

#### Object example:

``` javascript
const FNZ = require('field-normalizer');

const exampleObj = {
  fullName: 'John Connor',
  contactEmail: 'john.connor@sky.net',
  phoneNumber: '+05533334444',
};
```

#### Transforming all object fields to lower case:
``` javascript
FNZ.toLowerCase(exampleObj);
// { fullname, contactemail, phonenumber }
```

#### Transforming all object fields to upper case:
``` javascript
FNZ.toUpperCase(exampleObj);
// { FULLNAME, CONTACTEMAIL, PHONENUMBER }
```

#### Transforming all object fields to camel case:
``` javascript
FNZ.toCamelCase(exampleObj);
// { fullName, contactEmail, phoneNumber }
```

#### Transforming all object fields to pascal case:
``` javascript
FNZ.toPascalCase(exampleObj);
// { FullName, ContactEmail, PhoneNumber }
```

#### Transforming all object fields to constant case:
``` javascript
FNZ.toConstantCase(exampleObj);
// { FULL_NAME, CONTACT_EMAIL, PHONE_NUMBER }
```

#### Transforming all object fields to snake case:
``` javascript
FNZ.toSnakeCase(exampleObj);
// { full_name, contact_email, phone_number }
```

#### Transforming all object fields to header case:
``` javascript
FNZ.toHeaderCase(exampleObj);
// { Full-Name, Contact-Email, Phone-Number }
```

#### Transforming all object fields to param case:
``` javascript
FNZ.toParamCase(exampleObj);
// { full-name, contact-email, phone-number }
```

#### Constant of all public functions:
``` javascript
console.log(FNZ.FUNCTIONS)
```

#### Factory transform() for function dynamic invokation:
``` javascript
FNZ.transform(exampleObj, FNZ.FUNCTIONS.camelCase);
```

## Author

Caio Ribeiro Pereira <caio.ribeiro.pereira@gmail.com>  
Twitter: <https://twitter.com/crp_underground>  
About me: <https://crpwebdev.github.io>
