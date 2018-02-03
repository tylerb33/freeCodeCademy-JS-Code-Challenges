// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.



function chunkArrayInGroups(arr, size) {

  var temp = [];
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    console.log(i);
    if (i % size !== size - 1)
      temp.push(arr[i]);
    else{
      temp.push(arr[i]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0)
    result.push(temp);
  return result;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);