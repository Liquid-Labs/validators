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

export { isStringOrNothing, notNothingAndString }
