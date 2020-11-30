// take in array, compare each value if not equal return false
const eqArrays = function(arrayOne, arrayTwo) {
  // if they're not the same length definitely not equal
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  // loop over the first array
  for (let i = 0; i < arrayOne.length; i++) {
    // check if item in array is an array itself - if yes call eqArrays on it
    if (Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[i])) {
      if(!eqArrays(arrayOne[i], arrayTwo[i])) {
        return false;
      }
    } else if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
  }
  // if we haven't return false by now they must be the same
  return true;
};

module.exports = eqArrays;



