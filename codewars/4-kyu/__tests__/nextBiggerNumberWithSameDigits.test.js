it('should do something', function() {
  expect(nextBigger(12)).to.eql(21)
  expect(nextBigger(513)).to.eql(531)
  expect(nextBigger(2017)).to.eql(2071)
  expect(nextBigger(123456789)).to.eql(123456798)
});

it('should handle larger numbers', function() {
  expect(nextBigger(99999999999999)).to.eql(-1)
  expect(nextBigger(1234567811112)).to.eql(1234567811121)
  expect(nextBigger(59884848459853)).to.eql(59884848483559)
});

it('should return -1 otherwise', function() {
  expect(nextBigger(9)).to.eql(-1)
  expect(nextBigger(111)).to.eql(-1)
  expect(nextBigger(531)).to.eql(-1)
});
