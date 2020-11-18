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

const lowerCaseObj = {
  fullname: 'John Connor',
  contact: {
    contactemail: 'john.connor@sky.net',
    phonenumber: '+05533334444',
  },
  skills: [
    { name: 'Javascript', proficiencylevel: 3 },
    { name: 'Typescript', proficiencylevel: 1 },
  ],
};

const headerCaseObj = {
  'Full-Name': 'John Connor',
  Contact: {
    'Contact-Email': 'john.connor@sky.net',
    'Phone-Number': '+05533334444',
  },
  Skills: [
    { Name: 'Javascript', 'Proficiency-Level': 3 },
    { Name: 'Typescript', 'Proficiency-Level': 1 },
  ],
};

const paramCaseObj = {
  'full-name': 'John Connor',
  contact: {
    'contact-email': 'john.connor@sky.net',
    'phone-number': '+05533334444',
  },
  skills: [
    { name: 'Javascript', 'proficiency-level': 3 },
    { name: 'Typescript', 'proficiency-level': 1 },
  ],
};

const upperCaseObj = {
  FULLNAME: 'John Connor',
  CONTACT: {
    CONTACTEMAIL: 'john.connor@sky.net',
    PHONENUMBER: '+05533334444',
  },
  SKILLS: [
    { NAME: 'Javascript', PROFICIENCYLEVEL: 3 },
    { NAME: 'Typescript', PROFICIENCYLEVEL: 1 },
  ],
};

exports.camelCaseObj = camelCaseObj;
exports.pascalCaseObj = pascalCaseObj;
exports.constantCaseObj = constantCaseObj;
exports.snakeCaseObj = snakeCaseObj;
exports.lowerCaseObj = lowerCaseObj;
exports.upperCaseObj = upperCaseObj;
exports.paramCaseObj = paramCaseObj;
exports.headerCaseObj = headerCaseObj;
