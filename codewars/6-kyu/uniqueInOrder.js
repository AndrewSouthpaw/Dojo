function uniqueInOrder(iterable) {
  if (!Array.isArray(iterable)) iterable = iterable.split('')
  return iterable.reduce((acc, val) => {
    if (acc[acc.length - 1] === val) return acc
    acc.push(val)
    return acc
  }, [])
}
