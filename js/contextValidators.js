const fieldsMatch = (field1, field2) => (data) => {
  const value1 = data[field1]
  const value2 = data[field2]
  return notNothingAndString(value1) && notNothingAndString(value2)
    && (value1 !== value2
      ? `Fields '${field1}' and '${field2}' must match.`
      : null)
}

export { fieldsMatch }
