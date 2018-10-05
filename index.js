import uuidRe from '@liquid-labs/regex-repo'

import * as msgs from './msgs'

const isStringOrNothing = (value) => {
  if (value !== undefined && value !== null && typeof value !== 'string') {
    throw new Error('Validators expect string input.')
  }
  return true
}

const notNothingAndString = (value) => {
  if (value === undefined || value === null) {
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
  && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address.'
    : undefined

const isUsPhoneNumber = (value) => notNothingAndString(value)
  && !/^(\(\d{3}\)|\d{3})[._ -]?\d{3}[._ -]?\d{4}$/.test(value)
    ? 'Invalid phone number.'
    : undefined

const isZipCode = (value) => notNothingAndString(value)
  && !/^\d{5}([._ -]?\d{4})?$/.test(value)
    ? 'Invalid zip code.'
    : undefined

const fieldsMatch = (desc, otherValue) => (value) => notNothingAndString(value)
  && otherValue !== value
    ? desc + ' must match.'
    : undefined

export {
  uuidRe,
  isRequired,
  isEmail,
  isUsPhoneNumber,
  isZipCode,
  fieldsMatch
}
