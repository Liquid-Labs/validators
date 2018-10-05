import * as validators from './index'
import * as msgs from './msgs'



test('isRequired should accept any non-empty value.', function() {
  expect(validators.isRequired('foo')).toBe(undefined)
})
test('isRequired should throw error on non-string input.', function() {
  expect(() => validators.isRequired(false)).toThrow()
})
test('isRequired should report error on any empty input.', function() {
  expect(validators.isRequired()).toBe(msgs.isRequired)
  expect(validators.isRequired(null)).toBe(msgs.isRequired)
  expect(validators.isRequired('')).toBe(msgs.isRequired)
})

/*
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
*/
