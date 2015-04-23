function countingMinutesI(str) {

  function getTime(time) {
    var hr = parseInt(time.split(':')[0]);
    hr = hr % 12;
    if (time.substring(time.length - 2) === 'pm') hr += 12;
    var min = parseInt(time.split(':')[1].substr(0, 2));
    return hr * 60 + min;
  }

  var time1 = getTime(str.split('-')[0]);
  var time2 = getTime(str.split('-')[1]);

  if (time2 < time1) {
    time2 += 24 * 60;
  }

  return time2 - time1;
}
