/*

https://www.codewars.com/kata/rgb-to-hex-conversion

The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal
representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out
of that range should be rounded to the closest valid value.

 */

function rgb(r, g, b) {
  const toHexDigit = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
  }

  function toHex(val) {
    const first = Math.floor(val / 16)
    const second = val - first * 16
    return toHexDigit[first] + toHexDigit[second]
  }

  return [r, g, b].map(x => Math.min(255, x)).map(x => Math.max(0, x)).map(toHex).join('')
}

/*

TIL I learned that Number#toString allows you to pass in a radix! So you could do...

function toHex(val) { Number(val).toString(16) }

Amazing!

 */
