describe('smaller', () => {
  it('should work', () => {
    expect(smaller([5, 4, 3, 2, 1])).to.eql([4, 3, 2, 1, 0])
    expect(smaller([1, 2, 0])).to.eql([1, 1, 0])
  });
});
