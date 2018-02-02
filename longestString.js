// Return the length of the longest word in the provided sentence.


function findLongestWord(str) {
  var stringWordArray = str.split(' ');
  console.log(stringWordArray);
  var longestStringLength = 0;
  
  stringWordArray.forEach(function(word) {
    if (word.length > longestStringLength) {
      longestStringLength = word.length;
    }
  });
  return longestStringLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");