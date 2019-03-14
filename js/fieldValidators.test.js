import * as fValidators from './fieldValidators'
import * as msgs from './msgs'

/* global describe expect test */

describe('isRequierd', () => {
  test('should accept a non-empty, string value.', function() {
    expect(fValidators.isRequired('foo')).toBeNull()
  })
  test('should report error on any empty input.', function() {
    expect(fValidators.isRequired()).toBe(msgs.isRequired)
    expect(fValidators.isRequired(null)).toBe(msgs.isRequired)
    expect(fValidators.isRequired('')).toBe(msgs.isRequired)
  })
})

// We rely on the testing of the underlying RegExp to catch different validation
// errors. Here, we only check on the response of the validator to valid and
// invalid inputs.
describe('isEmail', () =>{
  test('isEmail should accept valid email.', function() {
    expect(fValidators.isEmail('foo@bar.com')).toBeNull()
  })
  test('isEmail should report on invalid email.', function() {
    expect(fValidators.isEmail('foo@bar.')).toBe(msgs.invalidEmail)
  })
})

describe('isUsPhoneNumber', () => {
  test('isUsPhoneNumber should accept valid US phone number.', function() {
    expect(fValidators.isUsPhoneNumber('5125678910')).toBeNull()
  })
  test('isUsPhoneNumber should report on invalid US phone number.', function() {
    expect(fValidators.isUsPhoneNumber('512567891')).toBe(msgs.invalidPhoneNumber)
  })
})

describe('isZipCode', () => {
  test('isZipCode should accept valid zip code.', function() {
    expect(fValidators.isZipCode('78741')).toBeNull()
  })
  test('isZipCode should report on invalid zip code.', function() {
    expect(fValidators.isZipCode('1873')).toBe(msgs.invalidZipCode)
  })
})

describe('common empty and non-string handling', () => {
  Object.keys(fValidators).forEach((key) => {
    if (key !== 'isRequired') {
      test.each`
      emptyVal     | desc
      ${undefined} | ${'undefined'}
      ${null}      | ${'null'}
      ${''}        | ${'empty string'}`(`${key} should accept empty value $desc.`, function({emptyVal}) {
  expect(fValidators[key].call(null, emptyVal)).toBeNull()
})
    }

    test.each`
    input    | desc
    ${false} | ${'boolean'}
    ${12}    | ${'number'}
    ${{}}    | ${'object'}
    ${[]}    | ${'array'}`(`${key} should raise error on non-string $desc input`, function({input}) {
  expect(() => fValidators[key].call(null, input)).toThrow()
})
  })
})
