// Check if a string (first argument, str) ends with the given target string (second argument, target). Do not use .endsWith().

function confirmEnding(str, target) {
  if (str.substr(-target.length) === target) {
    return true;
  } else {return false;}
  // "Never give up and good luck will find you."
  // -- Falcor
}

confirmEnding("Bastian", "n");
