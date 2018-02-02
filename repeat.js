// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  var finalString = "";
  
  if (num < 0) {
    return finalString;
  } else {
    for(let i=0; i<num; i++)
      finalString += str;
  }
  return finalString;

}

repeatStringNumTimes("abc", 3);