function divisionStringifed(num1, num2) {
  var result = Math.round(num1 / num2).toString();
  // add commas
  var ctr = 1;  
  for (var i = result.length - 1; i > 0; i--) {
    if (ctr === 3) {
      result = result.substring(0, i) + ',' + result.substring(i);
      ctr = 0;
    }
    ctr++;
  }
    
  return result;
}
