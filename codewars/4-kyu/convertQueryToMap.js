/*

https://www.codewars.com/kata/objectify-a-url-query-string/javascript

In this kata, we want to convert a URL query string into a nested object. The query string will contain parameters that
may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object.

You will receive a string input that looks something like this:

user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
Your method should return an object hash-map that looks like this:

{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
}
You can expect valid input. You won't see input like:
  // This will NOT happen
  foo=1&foo.bar=2
All properties and values will be strings — and the values should be left as strings to pass the tests.
Make sure you decode the URI components correctly

 */

const URI_DECODER = {
  '%20': ' ',
  '%25': '%',
  '%26': '&',
  '%3D': '=',
  '%3F': '?',
}

export const extractQueryParametersToTuples = (query) => {
  if (query === '') return []
  return query.split('&').map(q => {
    const tuple = q.split('=')
    let decodedWord = tuple[1]
    let match = null
    let bail = 0
    while (match = decodedWord.match(/(%..)/) && bail < 100) {
      decodedWord = decodedWord.replace(/(%..)/, URI_DECODER[RegExp.$1])
      bail++
    }
    return [tuple[0], decodedWord]
  })
}

export const deepAssign = (obj, path, value) => {
  const result = Object.assign({}, obj)
  const keys = path.split('.')
  const lastKey = key => key === keys[keys.length - 1]
  keys.reduce((acc, key) => {
    if (lastKey(key)) acc[key] = value
    if (!acc[key]) acc[key] = {}
    return acc[key]
  }, result)
  return result
}

export const convertQueryToMap = (query) => {
  return extractQueryParametersToTuples(query)
      .reduce((acc, tuple) => deepAssign(acc, tuple[0], tuple[1]), {})
}
