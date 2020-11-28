// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑 Assertion Failed 🛑: ${actual} !== ${expected}`);
//   }
// };

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

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
console.log(eqArrays([1, 2, [3]], [1, 2, 3])); // false
console.log(eqArrays([[1, 2, [[3], 4]], 5, []], [[1, 2, [[3], 4]], 5, []])) // true
console.log(eqArrays([[1, 2, [[3], 4]], 5, [7]], [[1, 2, [[3], 4]], 5, [6]])) // false





// console.log(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

