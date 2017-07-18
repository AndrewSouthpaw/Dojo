describe('#maxPossibleScore', () => {
  it('should work', () => {
    expect(maxPossibleScore({'a': 1, 'b': 2, 'c': 3}, ['a', 'c'])).to.eql(10)
    expect(maxPossibleScore({'a': 1, 'b': 2, 'c': 3}, [])).to.eql(6)
  })

  it('should handle "new questions" that do not have scores', () => {
    expect(maxPossibleScore({'a': 1}, ['b'])).to.eql(1)
  })
})
