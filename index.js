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
  && !value
    ? msgs.isRequired
    : undefined

const isEmail = (value) => notNothingAndString(value)
  && !regex.email.test(value)
    ? msgs.invalidEmail
    : undefined

const isUsPhoneNumber = (value) => notNothingAndString(value)
  && !/^(1[._ -]?)?(\(\d{3}\)|\d{3})[._ -]?\d{3}[._ -]?\d{4}$/.test(value)
    ? msgs.invalidPhoneNumber
    : undefined

const isZipCode = (value) => notNothingAndString(value)
  && !/^\d{5}([._ -]?\d{4})?$/.test(value)
    ? msgs.invalidZipCode
    : undefined

const fieldsMatch = (desc, otherValue) => (value) => notNothingAndString(value)
  && otherValue !== value
    ? desc + ' must match.'
    : undefined

export {
  isRequired,
  isEmail,
  isUsPhoneNumber,
  isZipCode,
  fieldsMatch
}
