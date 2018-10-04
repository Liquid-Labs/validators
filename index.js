import uuidRe from '@liquid-labs/regex-repo'

const isRequired = (value) =>
  !value
    ? 'Value required.'
    : undefined

const isEmail = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address.'
    : undefined

const isUsPhoneNumber = (value) =>
  value && !/^(\(\d{3}\)|\d{3})[._ -]?\d{3}[._ -]?\d{4}$/.test(value)
    ? "Invalid phone number."
    : undefined

const isZipCode = (value) =>
  value && !/^\d{5}([._ -]?\d{4})?$/.test(value)
    ? 'Invalid zip code.'
    : undefined

const fieldsMatch = (desc, otherValue) => (value) =>
  value && otherValue !== value
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
