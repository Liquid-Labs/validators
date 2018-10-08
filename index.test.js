import * as validators from './index'
import * as msgs from './msgs'

test('isRequired should accept any non-empty value.', function() {
  expect(validators.isRequired('foo')).toBe(undefined)
})
test('isRequired should report error on any empty input.', function() {
  expect(validators.isRequired()).toBe(msgs.isRequired)
  expect(validators.isRequired(null)).toBe(msgs.isRequired)
  expect(validators.isRequired('')).toBe(msgs.isRequired)
})

// We rely on the testing of the underlying RegExp to catch different validation
// errors. Here, we only check on the response of the validator to valid and
// invalid inputs.
test('isEmail should accept valid email.', function() {
  expect(validators.isEmail('foo@bar.com')).toBe(undefined)
})
test('isEmail should report on invalid email.', function() {
  expect(validators.isEmail('foo@bar.')).toBe(msgs.invalidEmail)
})

test('isUsPhoneNumber should accept valid US phone number.', function() {
  expect(validators.isUsPhoneNumber('5125678910')).toBe(undefined)
  expect(validators.isUsPhoneNumber('873-273-3833')).toBe(undefined)
  expect(validators.isUsPhoneNumber('873.273.3833')).toBe(undefined)
  expect(validators.isUsPhoneNumber('1.873.273.3833')).toBe(undefined)
})
test('isUsPhoneNumber should report on invalid US phone number.', function() {
  expect(validators.isUsPhoneNumber('512567891')).toBe(msgs.invalidPhoneNumber)
  expect(validators.isUsPhoneNumber('512283a838')).toBe(msgs.invalidPhoneNumber)
})

test('isZipCode should accept valid zip code.', function() {
  expect(validators.isZipCode('78741')).toBe(undefined)
  expect(validators.isZipCode('12345-8383')).toBe(undefined)
})
test('isZipCode should report on invalid zip code.', function() {
  expect(validators.isZipCode('1873')).toBe(msgs.invalidZipCode)
  expect(validators.isZipCode('7271-1')).toBe(msgs.invalidZipCode)
  expect(validators.isZipCode('72711-123')).toBe(msgs.invalidZipCode)
  expect(validators.isZipCode('7271-11231')).toBe(msgs.invalidZipCode)
})

Object.keys(validators).forEach((key) => {
  if (key !== 'isRequired' && key !== 'fieldsMatch') {
    test(`${key} should accept empty values.`, function() {
      expect(validators[key].call(null)).toBe(undefined)
      expect(validators[key].call(null, null)).toBe(undefined)
      expect(validators[key].call(null, '')).toBe(undefined)
    })

    test(`${key} should throw error on non-string input.`, function() {
      expect(() => validators.isRequired(false)).toThrow()
      expect(() => validators.isRequired(12)).toThrow()
      expect(() => validators.isRequired({})).toThrow()
    })
  }
})
