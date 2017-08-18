describe('#rgb', () => {
  it('should work', () => {
    expect(rgb(255, 255, 255)).to.eql('FFFFFF')
    expect(rgb(255, 255, 300)).to.eql('FFFFFF')
    expect(rgb(0, 0, 0)).to.eql('000000')
    expect(rgb(148, 0, 211)).to.eql('9400D3')
  })
})
