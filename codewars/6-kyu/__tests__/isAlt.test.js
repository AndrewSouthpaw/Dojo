describe('#isAlt', () => {
  it('should work', () => {
    expect(isAlt('amazona')).to.eql(true)
    expect(isAlt('banana')).to.eql(true)
    expect(isAlt('bananap')).to.eql(true)
    expect(isAlt('a')).to.eql(true)
    expect(isAlt('b')).to.eql(true)
    expect(isAlt('apple')).to.eql(false)
    expect(isAlt('dicia')).to.eql(false)
    expect(isAlt('bfbia')).to.eql(false)
    expect(isAlt('bjcab')).to.eql(false)
  })
})
