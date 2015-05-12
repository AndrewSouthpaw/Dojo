function swapCase(str) {
  return str
    .split('')
    .map(function (ch) {
      return (ch.charCodeAt(0) >= 97) ? ch.toUpperCase()
                                      : ch.toLowerCase()
    })
    .join('');
}