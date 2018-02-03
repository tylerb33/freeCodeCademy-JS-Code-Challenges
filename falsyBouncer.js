// Remove all falsy values from an array.

function bouncer(arr) {
  // Don't show a false ID to this bouncer
  return arr.filter(Boolean)
}

bouncer([1, null, NaN, 2, undefined]);