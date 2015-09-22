/**
 * Using the JavaScript language, have the function CountingMinutes(str) take 
 * the str parameter being passed which will be two times (each properly 
 * formatted with a colon and am or pm) separated by a hyphen and return the 
 * total number of minutes between the two times. The time will be in a 12 hour 
 * clock format. For example: if str is 9:00am-10:00am then the output should 
 * be 60. If str is 1:00pm-11:00am the output should be 1320. 
 */

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
