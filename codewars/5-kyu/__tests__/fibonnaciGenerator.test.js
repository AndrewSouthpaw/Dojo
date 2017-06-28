describe('genfib', () => {
  it('should work', () => {
    const fib = genfib()
    expect(fib()).to.eql(0)
    expect(fib()).to.eql(1)
    expect(fib()).to.eql(1)
    expect(fib()).to.eql(2)
    expect(fib()).to.eql(3)
    expect(fib()).to.eql(5)
    expect(fib()).to.eql(8)
    expect(fib()).to.eql(13)
  })
});
