function formattedDivision(num1, num2) {
  // Inspired by http://bit.ly/1cfYynm
  var dividend=(num1/num2).toFixed(4).toString();
  var parts = (dividend).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");


  /* old solution -- does not pass all test cases */
  // var result = (num1 / num2).toString();

  // // limit to 4 significant digits
  // if (result.indexOf('.') !== -1) {
  //   result = result.substring(0, result.indexOf('.') + 5)
  // } else {
  //   result += '.';
  // }

  // // pad sigfigs
  // while (result.length - (result.indexOf('.') + 1) < 4) {
  //   result += '0';
  // }

  // // insert commas
  // var columns = 0;
  // var start = (result.indexOf('.') === -1) ? result.length - 1
  //                                          : result.indexOf('.') - 1;
  // for (var i = start; i >= 0; i--) {
  //   if (columns === 3) {
  //     result = result.substring(0, i + 1) + ',' + result.substr(i + 1);
  //     columns = 0;
  //   }
  //   columns++;
  // }

  // return result;
}