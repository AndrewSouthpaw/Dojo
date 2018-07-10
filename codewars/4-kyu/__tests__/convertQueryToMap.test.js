describe('#convertQueryToMap', () => {
  it('should work', () => {
    const query = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'
    const expected = {
      'user': {
        'name': {
          'firstname': 'Bob',
          'lastname': 'Smith',
        },
        'favoritecolor': 'Light Blue',
      },
    }
    expect(convertQueryToMap(query)).toEqual(expected)
  })

  it('should handle an empty string', () => {
    expect(convertQueryToMap('')).toEqual({})
  })
})

describe('#extractQueryParametersToTuples', () => {
  it('should split into an array', () => {
    expect(extractQueryParametersToTuples('foo=1')).toEqual([['foo', '1']])
    expect(extractQueryParametersToTuples('foo=1&bar=2&baz=3')).toEqual([['foo', '1'], ['bar', '2'], ['baz', '3']])
  })

  it('should parse URI components', () => {
    expect(extractQueryParametersToTuples('foo=Light%20Blue')).toEqual([['foo', 'Light Blue']])
    expect(extractQueryParametersToTuples('foo=Very%20Light%20Blue')).toEqual([['foo', 'Very Light Blue']])
    expect(extractQueryParametersToTuples('a=a%26b%3Dc%3F')).toEqual([['a', 'a&b=c?']])
  })
})

describe('#deepAssign', () => {
  it('should build out an object to deeply assign a property', () => {
    expect(deepAssign({ qux: 'World' }, 'foo.bar.baz', 'Hello')).toEqual({
      foo: { bar: { baz: 'Hello' } },
      qux: 'World'
    })
  })

  it('should walk along existing paths and not overwrite', () => {
    expect(deepAssign({ foo: { bar: 'Hello' } }, 'foo.baz', 'World')).toEqual({foo: { bar: 'Hello', baz: 'World' }})
  })
})
