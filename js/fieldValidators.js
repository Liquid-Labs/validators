import * as regex from '@liquid-labs/regex-repo'
import * as msgs from './msgs'
import { isStringOrNothing, notNothingAndString } from './lib'

const isRequired = (value) =>
  isStringOrNothing(value) && !value ? msgs.isRequired : null

const isEmail = (value) =>
  notNothingAndString(value) && !regex.email.test(value)
    ? msgs.invalidEmail
    : null

const isUsPhoneNumber = (value) =>
  notNothingAndString(value) && !regex.usPhone.test(value)
    ? msgs.invalidPhoneNumber
    : null

const isZipCode = (value) =>
  notNothingAndString(value) && !regex.zipCode.test(value)
    ? msgs.invalidZipCode
    : null

export {
  isRequired,
  isEmail,
  isUsPhoneNumber,
  isZipCode,
}
