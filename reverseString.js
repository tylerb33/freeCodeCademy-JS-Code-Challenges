// Reverse the provided string.

function reverseString(str) {
  splitStr = str.split('').reverse().join('');
  return splitStr;
}

reverseString("hello");