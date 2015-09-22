
function countingMinutes(str) {
  function strToMinutes(time) {
    var hours = parseInt(time.split(':')[0], 10) % 12 + (time.split(':')[1][2] === 'a' ? 0 : 12);
    var minutes = parseInt(time.split(':')[1].substr(0, 2), 10)
    return hours * 60 + minutes;
  }

  var time1 = strToMinutes(str.split('-')[0]);
  var time2 = strToMinutes(str.split('-')[1]);

  if (time2 < time1) time2 += 24 * 60;
  return time2 - time1;
}

console.log(countingMinutes('1:23am-1:08am'))