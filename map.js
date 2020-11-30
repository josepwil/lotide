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


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed 🛑: ${actual} !== ${expected}`);
  }
};



const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const firstChar = map(words, word => word[0]);
const toUpper = map(words, word => word.toUpperCase());
const includesT = map(words, word => word.includes('t'));

assertArraysEqual(firstChar, ["g", "c", "t", "m", "t"]);
assertArraysEqual(toUpper, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
assertArraysEqual(includesT, [ false, true, true, false, true ]);

module.exports = map;