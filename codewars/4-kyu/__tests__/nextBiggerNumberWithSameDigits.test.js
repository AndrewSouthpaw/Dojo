describe('#nextBigger', function() {
  it('should do something', function() {
    expect(nextBigger(12)).to.eql(21)
    expect(nextBigger(513)).to.eql(531)
    expect(nextBigger(2017)).to.eql(2071)
    expect(nextBigger(123456789)).to.eql(123456798)
  });

  xit('should handle larger numbers', function() {
    expect(nextBigger(1234567811112)).to.eql(1234567811121)
  });

  it('should return -1 otherwise', function() {
    expect(nextBigger(9)).to.eql(-1)
    expect(nextBigger(111)).to.eql(-1)
    expect(nextBigger(531)).to.eql(-1)
  });
});

describe('#permutations', function() {
  it('should show permutations', function() {
    expect(permutations('9')).to.eql(['9'])
    expect(permutations('21')).to.eql(['12', '21'])
    expect(permutations('123')).to.eql(['123', '132', '213', '231', '312', '321'])
  });
});
