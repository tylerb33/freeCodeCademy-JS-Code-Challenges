// Return the factorial of the provided integer.

function factorialize(num) {
  var counter = 1;
  var accumulator = 1;
  
  while (counter <= num) {
    accumulator *= counter;
    counter++;
  } 
  return accumulator;
}

factorialize(5);