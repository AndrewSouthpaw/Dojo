describe('#findUniq', () => {
  it('should work', () => {
    expect(findUniq([ 1, 1, 1, 2, 1, 1 ])).to.eql(2)
    expect(findUniq([ 0, 0, 0.55, 0, 0 ])).to.eql(0.55)
  })
})
