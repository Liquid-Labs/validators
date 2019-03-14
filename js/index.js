import * as regex from '@liquid-labs/regex-repo'

import * as msgs from './msgs'

const isStringOrNothing = (value) => {
  if (value !== undefined && value !== null && typeof value !== 'string') {
    throw new Error('Validators expect string input.')
  }
  return true
}

const notNothingAndString = (value) => {
  if (value === undefined || value === null || value === '') {
    return false
  }
  else if (typeof value !== 'string') {
    throw new Error('Validators expect string input.')
  }
  else {
    return true
  }
}

const isRequired = (value) => isStringOrNothing(value)
  && (!value
    ? msgs.isRequired
    : null)

const isEmail = (value) => notNothingAndString(value)
  && (!regex.email.test(value)
    ? msgs.invalidEmail
    : null)

const isUsPhoneNumber = (value) => notNothingAndString(value)
  && (!regex.usPhone.test(value)
    ? msgs.invalidPhoneNumber
    : null)

const isZipCode = (value) => notNothingAndString(value)
  && (!regex.zipCode.test(value)
    ? msgs.invalidZipCode
    : null)

const fieldsMatch = (field1, field2) => (data) => {
  const value1 = data[field1]
  const value2 = data[field2]
  return notNothingAndString(value1) && notNothingAndString(value2)
    && (value1 !== value2
      ? `Fields '${field1}' and '${field2}' must match.`
      : null)
}

export {
  isRequired,
  isEmail,
  isUsPhoneNumber,
  isZipCode,
  fieldsMatch
}
