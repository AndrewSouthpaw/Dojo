import { rgb } from '../rgb'

describe('#rgb', () => {
  it('should work', () => {
    expect(rgb(255, 255, 255)).toEqual('FFFFFF')
    expect(rgb(255, 255, 300)).toEqual('FFFFFF')
    expect(rgb(0, 0, 0)).toEqual('000000')
    expect(rgb(148, 0, 211)).toEqual('9400D3')
  })
})
