const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅ Assertion Passed ✅: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑 Assertion Failed 🛑: ${arrayOne} !== ${arrayTwo}`);
  }
};



// take in array, compare each value if not equal return false
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



const middle = function(array) {
  const middleElement = [];
  const length = array.length
  const midLength = array.length / 2

  if (length % 2 === 0) {
    middleElement.push(array[midLength - 1], array[midLength]);
  } else {
    middleElement.push(array[midLength - 0.5])
  }
  return middleElement;
}

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]