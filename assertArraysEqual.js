const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅ Assertion Passed ✅: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑 Assertion Failed 🛑: ${arrayOne} !== ${arrayTwo}`);
  }
};


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 3, 5], [1, 2, 4]);
