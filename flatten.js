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

// loop over elements in array
// if not an array add to flattened array
// if an array loop over that array
// if not an array add to flattend array

const flatten = function(enteredArray) {
  let flattendArray = [];

  const flattenLite = function(enteredArray) {
    for (let item of enteredArray) {
      if (Array.isArray(item)) {
        flattenLite(item);
      } else {
        flattendArray.push(item);
      }
    }
  };
  flattenLite(enteredArray);
  return flattendArray;
};


console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, [3, 4, [5, 6]], 7, [8]])); // => [1, 2, 3, 4, 5, 6, 7, 8]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);


