/* global describe expect test */

import * as cValidators from './contextValidators'

describe('fieldsMatch', () => {
  test('should report error on non-equal fields', () => {
    expect(cValidators.fieldsMatch('a', 'b')({a : 'a', b : 'b'})).not.toBeNull()
  })

  test('should report no error on equal fields', () => {
    expect(cValidators.fieldsMatch('a', 'b')({a : 'a', b : 'a'})).toBeNull()
  })
})
