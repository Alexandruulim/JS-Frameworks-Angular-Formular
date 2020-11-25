'use strict';

const validateForm = (fields) => {
  let hasErrors;

  const firstName = validateName(fields.firstName);
  const lastName = validateName(fields.lastName);
  const salary = validateSalary(fields.salary);
  const birthDate = validateBirthDate(fields.birthDate);
  const gender = validateGender(fields.isGenderMale, fields.isGenderFemale);

  hasErrors =
    firstName || lastName || salary || birthDate || gender ? true : false;

  return { hasErrors, firstName, lastName, salary, birthDate, gender };
};

const validateName = (name) => {
  if (name.length < 3 || name.length > 30) {
    return 'Trebuie să conțină 3 până la 30 charactere';
  }

  if (!name.match(/^[a-zA-Z]+\-?[a-zA-Z]+$/)) {
    return 'Trebuie să conțină doar litere și "-" la mijloc';
  }

  return '';
};

const validateSalary = (salary) => {
  if (!salary.match(/^\d+$/)) {
    return 'Introduceți un salariu valid (număr întreg)';
  }

  if (+salary <= 1000) {
    return 'Vă subestimați';
  }

  if (+salary >= 10000) {
    return 'EXAGERAT!!!';
  }

  return '';
};

const validateBirthDate = (birthDate) => {
  if (birthDate) {
    const age = new Date().getFullYear() - birthDate.getFullYear();

    if (age < 18) {
      return 'Dată greșită, vârsta minimă este 18 ani';
    }
  }

  return '';
};

const validateGender = (isMale, isFemale) => {
  if (!isMale && !isFemale) {
    return 'Alegeți-va genul';
  }

  return '';
};
